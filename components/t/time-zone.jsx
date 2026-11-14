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
		"content": `<style>.owk-nql-j {
  d: path("M12 2.5C9.5 5 8 8.5 8 12s1.5 7 4 9.5m0-19c2.5 2.5 4 6 4 9.5m-1 6.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7xutcx-f {
  d: path("M18 17v1.25l1 .5");
}

.x_25ybdoh {
  d: path("M12 21.5a9.5 9.5 0 1 1 9.5-9.5m-19 0h19");
}
</style><g class="ulnmmdpxh"><path class="x_25ybdoh"/><path class="owk-nql-j"/><path class="v7xutcx-f"/></g>`,
		"fallback": "uix-sharp:time-zone",
	});
}

export default Component;
