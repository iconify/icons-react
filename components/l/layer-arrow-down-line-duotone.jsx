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
		"content": `<style>.gpx1yfuko {
  d: path("M16.2127 10.8085L19.0212 9.6851C21.0071 8.8907 22 8.4935 22 8C22 7.5065 21.0071 7.1093 19.0212 6.3149L16.2127 5.1915C14.2268 4.3972 13.2339 4 12 4C10.7661 4 9.7732 4.3972 7.7873 5.1915L4.9788 6.3149C2.9929 7.1093 2 7.5065 2 8C2 8.4935 2.9929 8.8907 4.9788 9.6851L7.7873 10.8085C9.7732 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085Z");
}

.jx0p4fbya {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.krbqzhbmv {
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 12V20M9 17L12 20L15 17");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="jx0p4fbya"><path class="krbqzhbmv"/><path class="gpx1yfuko"/></g>`,
		"fallback": "solar:layer-arrow-down-line-duotone",
	});
}

export default Component;
