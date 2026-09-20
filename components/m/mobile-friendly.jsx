import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bjyukmbod {
  fill: currentColor;
  d: path("M6.616 22q-.667 0-1.141-.475T5 20.386V3.615q0-.666.475-1.14T6.615 2h8.77q.666 0 1.14.475T17 3.614v3.308h-1V5.5H6v13h10v-1.423h1v3.298q0 .68-.475 1.153q-.474.472-1.14.472zm8.334-6.692l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.707z");
}
</style><path class="bjyukmbod"/>`,
		"fallback": "material-symbols-light:mobile-friendly",
	});
}

export default Component;
