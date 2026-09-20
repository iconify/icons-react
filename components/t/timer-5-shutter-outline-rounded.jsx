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
		"content": `<style>.ml0a2-i4e {
  fill: currentColor;
  d: path("M14.27 18.116H9.5q-.256 0-.436-.18t-.18-.438t.18-.436t.436-.178h4.77q.268 0 .442-.173t.172-.442v-3.038q0-.27-.172-.442t-.443-.173H9.5q-.256 0-.436-.18T8.884 12V6.5q0-.256.18-.436t.436-.18h6q.257 0 .436.18t.18.438t-.18.436t-.436.178h-5.384v4.269h4.153q.77 0 1.308.538t.539 1.308v3.038q0 .77-.539 1.308t-1.308.539");
}
</style><path class="ml0a2-i4e"/>`,
		"fallback": "material-symbols-light:timer-5-shutter-outline-rounded",
	});
}

export default Component;
