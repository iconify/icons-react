import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gk4mkzbxd {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M17.999 14a4 4 0 1 1 0 8a4 4 0 0 1 0-8");
}

.rasheccro {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M17.999 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8");
}

.sjnetq-bv {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M27 32a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z");
}

.xc7po1b3o {
  fill: var(--svg-color--77b255, #77b255);
  d: path("M17.999 25a4 4 0 1 1 0 8a4 4 0 0 1 0-8");
}
</style><path class="sjnetq-bv"/><path class="xc7po1b3o"/><path class="gk4mkzbxd"/><path class="rasheccro"/>`,
		"fallback": "twemoji:vertical-traffic-light",
	});
}

export default Component;
