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
		"content": `<style>.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw8qf2zwz {
  d: path("M12.7 21.5H4.5v-19h15v9.4");
}

.y6qy0ceqv {
  d: path("M7.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h4.75M13.5 8v2m2.75-2v2M8 13.5h4.7M8 17h3.5m4-2.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}
</style><g class="ulnmmdpxh"><path class="uw8qf2zwz"/><path class="y6qy0ceqv"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:lease-expiry",
	});
}

export default Component;
