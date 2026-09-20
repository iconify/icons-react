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
		"content": `<style>.rs3ka9b7s {
  fill: currentColor;
  d: path("M14.27 18.116H9.5q-.256 0-.436-.18t-.18-.438t.18-.436t.436-.178h4.77q.268 0 .442-.173t.172-.442v-3.038q0-.27-.172-.442t-.443-.173H9.5q-.256 0-.436-.18T8.884 12V6.5q0-.256.18-.436t.436-.18h6q.257 0 .436.18t.18.438t-.18.436t-.436.178h-5.384v4.269H14.5q.671 0 1.143.472T16.115 13v3.27q0 .769-.538 1.307t-1.308.539");
}
</style><path class="rs3ka9b7s"/>`,
		"fallback": "material-symbols-light:timer-5-shutter-rounded",
	});
}

export default Component;
