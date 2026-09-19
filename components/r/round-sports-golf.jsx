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
		"content": `<style>.a47ljxbek {
  fill: currentColor;
  d: path("M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7s-7 3.13-7 7s3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5");
}

.ac2-8hbbw {
  cx: 12px;
  cy: 6px;
  r: 1px;
  fill: currentColor;
}

.een6afftk {
  cx: 14px;
  cy: 8px;
  r: 1px;
  fill: currentColor;
}

.np9w8jb-l {
  fill: currentColor;
  d: path("M16 17H8c-.55 0-1 .45-1 1s.45 1 1 1h1c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h1c.55 0 1-.45 1-1s-.45-1-1-1");
}

.uyhfztemm {
  cx: 10px;
  cy: 8px;
  r: 1px;
  fill: currentColor;
}
</style><path class="a47ljxbek"/><circle class="uyhfztemm"/><circle class="een6afftk"/><circle class="ac2-8hbbw"/><path class="np9w8jb-l"/>`,
		"fallback": "ic:round-sports-golf",
	});
}

export default Component;
