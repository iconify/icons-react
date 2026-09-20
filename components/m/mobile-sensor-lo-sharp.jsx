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
		"content": `<style>.jw5hydcdb {
  fill: currentColor;
  d: path("M4.23 13.5v-6h1v6zm14.54 3v-6h1v6zM6.807 20V4h10.384v16zm5.78-11.914q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22");
}
</style><path class="jw5hydcdb"/>`,
		"fallback": "material-symbols-light:mobile-sensor-lo-sharp",
	});
}

export default Component;
