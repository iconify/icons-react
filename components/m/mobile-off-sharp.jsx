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
		"content": `<style>.x03xhlbbr {
  fill: currentColor;
  d: path("M20.846 22.204L1.392 2.75l.708-.708l19.454 19.454zM12.588 6.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M6 22V5.942l12 12V22zm12-6.934L6.029 2.832V2H18v4.83h.923v3.686H18z");
}
</style><path class="x03xhlbbr"/>`,
		"fallback": "material-symbols-light:mobile-off-sharp",
	});
}

export default Component;
