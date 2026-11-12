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
		"content": `<style>.eu7qlgbjd {
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 12V20M9 17L12 20L15 17");
}

.jmviq408d {
  d: path("M16.2127 10.808L19.0212 9.685C21.0071 8.891 22 8.494 22 8C22 7.506 21.0071 7.109 19.0212 6.315L16.2127 5.192C14.2268 4.397 13.2339 4 12 4C10.7661 4 9.7732 4.397 7.7873 5.192L4.9788 6.315C2.9929 7.109 2 7.506 2 8C2 8.494 2.9929 8.891 4.9788 9.685L7.7873 10.808C9.7732 11.603 10.7661 12 12 12C13.2339 12 14.2268 11.603 16.2127 10.808Z");
}

.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="jx0p4fbya"><path class="jmviq408d"/><path class="eu7qlgbjd"/></g>`,
		"fallback": "solar:layer-arrow-down-linear",
	});
}

export default Component;
