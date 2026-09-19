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
		"content": `<style>.lnp3epnpq {
  fill: currentColor;
  d: path("M5 4h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z");
}

.lrjqylc2u {
  fill: currentColor;
  d: path("M19 8.35V3h-5v2h3v2.65L13.52 12H10V7H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48zM7 15c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1");
}
</style><path class="lrjqylc2u"/><path class="lnp3epnpq"/>`,
		"fallback": "ic:sharp-electric-moped",
	});
}

export default Component;
