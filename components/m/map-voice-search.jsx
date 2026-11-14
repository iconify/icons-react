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
		"content": `<style>.n-exz4txv {
  fill: currentColor;
  d: path("M17 13h2.5v5H17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0fwhvb8n {
  d: path("M12.138 19.308L9 18l-6 2.5V6l6-2.5L15 6l6-2.5v6.7M9 3.5V18m6-12v4.2");
}

.yrotpsscm {
  d: path("M14.5 17a3.75 3.75 0 0 0 7.5 0m-3.75 3.75V22");
}
</style><g class="ulnmmdpxh"><path class="v0fwhvb8n"/><path class="n-exz4txv"/><path class="yrotpsscm"/></g>`,
		"fallback": "uix-sharp:map-voice-search",
	});
}

export default Component;
