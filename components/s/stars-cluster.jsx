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
		"content": `<style>.rgwt0ubum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 7l1.91 3.871l4.272.62l-3.091 3.013l.73 4.255L9.5 16.75l-3.821 2.009l.73-4.255l-3.091-3.013l4.272-.62Zm8.25-3.75l.882 1.786l1.971.287l-1.426 1.391l.336 1.963l-1.763-.927l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287Zm1.25 12l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L19 19l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238Z");
}
</style><path class="rgwt0ubum"/>`,
		"fallback": "uix-sharp:stars-cluster",
	});
}

export default Component;
