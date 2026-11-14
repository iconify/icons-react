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
		"content": `<style>.fr81mu2dx {
  d: path("M9 5h6v6H9Z");
}

.iqlv1zb1o {
  fill: currentColor;
  d: path("M12 6.75S10.75 8.25 10.75 9a1.25 1.25 0 0 0 2.5 0c0-.75-1.25-2.25-1.25-2.25Z");
}

.r2sczxg1m {
  d: path("M6.5 2.5h11V15h-11Zm3 12.5v6.5m5-6.5v6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2sczxg1m"/><path class="fr81mu2dx"/><path class="iqlv1zb1o"/></g>`,
		"fallback": "uix-sharp:moisture-meter",
	});
}

export default Component;
