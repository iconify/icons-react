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
		"content": `<style>.a4pdidbgn {
  fill: currentColor;
  d: path("M6.808 20V4h10.384v16zm5.78-11.914q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M1.462 16.5v-6h1v6zm2.769-3v-6h1v6zm17.307 0v-6h1v6zm-2.769 3v-6h1v6z");
}
</style><path class="a4pdidbgn"/>`,
		"fallback": "material-symbols-light:mobile-sensor-hi-sharp",
	});
}

export default Component;
