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
		"content": `<style>.svm4zwb3q {
  fill: currentColor;
  d: path("M9.82 18.18q-.897-.896-.897-2.18H5q-.421 0-.71-.29Q4 15.422 4 15q0-3.134 2.166-5.47T11.5 7.012V4.385h1v2.627q3.17.182 5.335 2.518T20 15q0 .421-.29.71q-.289.29-.71.29h-3.923q0 1.285-.896 2.18T12 19.078t-2.18-.896M5 15h14q0-2.9-2.05-4.95T12 8t-4.95 2.05T5 15");
}
</style><path class="svm4zwb3q"/>`,
		"fallback": "material-symbols-light:light",
	});
}

export default Component;
