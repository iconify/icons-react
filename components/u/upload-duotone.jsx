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
		"content": `<style>.evpekyz3z {
  stroke-opacity: 0.4;
  d: path("M4 18L4 19C4 20.1046 4.8954 21 6 21L18 21C19.1046 21 20 20.1046 20 19L20 18");
}

.jh1pe0bqd {
  d: path("M12 14L12 3M8 7L12 3L16 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="evpekyz3z"/><path class="jh1pe0bqd"/></g>`,
		"fallback": "keyline-icons:upload-duotone",
	});
}

export default Component;
