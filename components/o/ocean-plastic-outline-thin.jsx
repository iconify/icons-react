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
		"content": `<style>.d0l4pqiqc {
  d: path("m3 18 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4j9py9tw {
  d: path("M10.5 5V2h3v3");
}

.vywsisw8a {
  d: path("M9 5v9h6V5Z");
}
</style><g class="hntgybcog"><path class="vywsisw8a"/><path class="p4j9py9tw"/><path class="d0l4pqiqc"/></g>`,
		"fallback": "iconmind:ocean-plastic-outline-thin",
	});
}

export default Component;
