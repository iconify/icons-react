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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hq7hcpb6a {
  fill: currentColor;
  d: path("M6 20C6 21.1046 5.1046 22 4 22C2.8954 22 2 21.1046 2 20C2 18.8954 2.8954 18 4 18C5.1046 18 6 18.8954 6 20Z");
  stroke: none;
}

.x9r413l2z {
  d: path("M17 2L17 14M12.6 11.3L21.4 4.7M12.6 4.7L21.4 11.3");
}
</style><g class="gp_8x1bzb"><path class="x9r413l2z"/><path class="hq7hcpb6a"/></g>`,
		"fallback": "keyline-icons:regex-sharp-two-tone",
	});
}

export default Component;
