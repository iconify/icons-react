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
		"content": `<style>.ctynhw5wp {
  d: path("m16.293 21.707l-3-3a1 1 0 0 1 1.414-1.414L16 18.586V13a1 1 0 0 1 2 0v5.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.g1sh-zeaw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 11h-1a.997.997 0 0 0-1 1v9a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="g1sh-zeaw"/><path class="ctynhw5wp"/></g>`,
		"fallback": "coolicons:mobile-download-corner-bulk",
	});
}

export default Component;
