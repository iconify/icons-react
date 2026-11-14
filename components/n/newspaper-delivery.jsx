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
		"content": `<style>.cm-4gvbac {
  d: path("M5.25 3.5H17.5q.135 0 .27.022q.134.021.266.064q.133.044.262.108q.13.064.254.149q.125.084.244.188q.119.105.232.227q.112.123.217.263q.104.141.2.297q.095.156.181.327t.161.355t.138.379t.116.399q.051.204.091.416q.039.211.065.428t.04.437t.013.441q0 .313-.027.624q-.026.31-.079.612q-.052.301-.13.588q-.078.286-.179.552t-.224.507q-.122.241-.264.451t-.3.387t-.331.315m-.867.428q-.174.036-.349.036H5.25m5.75-9v9m3-9v9m1 6.25h6.5m-3-3l3 3l-3 3");
}

.tnhx9ubdo {
  d: path("M2.5 8A2.75 4.5 0 1 0 8 8a2.75 4.5 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tnhx9ubdo"/><path class="cm-4gvbac"/></g>`,
		"fallback": "uix-sharp:newspaper-delivery",
	});
}

export default Component;
