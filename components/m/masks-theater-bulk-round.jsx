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

.u698xq8ca {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.091 11.842l-.694-3.939a4 4 0 0 1 3.244-4.634l3.939-.695a4 4 0 0 1 4.634 3.245l.695 3.939a6.001 6.001 0 0 1-11.818 2.084");
}

.ukhx3vbqr {
  d: path("M17.275 5.513h.01a1 1 0 0 1 0 2h-.01a1 1 0 1 1 0-2m-3.939.695h.01a1 1 0 0 1 0 2h-.01a1 1 0 0 1 0-2m-11.245 8.75l.695-3.939A4 4 0 0 1 7.42 7.774l.279.05a.999.999 0 1 1-.347 1.969l-.28-.049a2 2 0 0 0-2.317 1.622l-.694 3.939a3.999 3.999 0 0 0 6.87 3.418c.302-.323.547-.695.726-1.1a1 1 0 1 1 1.829.81a6 6 0 0 1-11.395-3.475m12.553-5.413a1.266 1.266 0 0 0 2.201-.387a1 1 0 1 1 1.902.62a3.268 3.268 0 0 1-5.677 1.001a1.001 1.001 0 0 1 1.574-1.234m-7.919 1.168h.01a1 1 0 0 1 0 2h-.01a1 1 0 1 1 0-2m-1.482 4.323a3.268 3.268 0 0 1 5.677 1.001a.997.997 0 0 1-1.028 1.307a1 1 0 0 1-.873-.686a1.267 1.267 0 0 0-2.201-.389a1.002 1.002 0 0 1-1.659-.125a1 1 0 0 1 .084-1.108");
}
</style><g class="cuyn6tgcc"><path class="u698xq8ca"/><path class="ukhx3vbqr"/></g>`,
		"fallback": "coolicons:masks-theater-bulk-round",
	});
}

export default Component;
