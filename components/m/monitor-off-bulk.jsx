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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k43mu2b0a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 14.757L8.243 3H18a3 3 0 0 1 3 3v9q0 .345-.077.68ZM4.438 3.438l14.434 14.434A3 3 0 0 1 18 18H6a3 3 0 0 1-3-3V6c0-1.047.544-2.018 1.438-2.562");
}

.n2tzskgxj {
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414l-19-19a.999.999 0 1 1 1.414-1.414M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="k43mu2b0a"/><path class="n2tzskgxj"/></g>`,
		"fallback": "coolicons:monitor-off-bulk",
	});
}

export default Component;
