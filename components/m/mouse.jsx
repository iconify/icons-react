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
		"content": `<style>.wzccwpbxc {
  fill: currentColor;
  d: path("M12 22q-2.925 0-4.962-2.037T5 15v-4h14v4q0 2.925-2.037 4.963T12 22M5 9q0-2.625 1.7-4.587T11 2.074V9zm8 0V2.075q2.6.375 4.3 2.338T19 9z");
}
</style><path class="wzccwpbxc"/>`,
		"fallback": "material-symbols:mouse",
	});
}

export default Component;
