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
		"content": `<style>.b8jo61-qt {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M1.783 14.023v.02C.782 14.263 0 15.939 0 18s.782 3.737 1.783 3.956v.021l28.701 7.972V6.064z");
}

.gafz2ebmh {
  cx: 31px;
  cy: 18px;
  fill: var(--svg-color--269, #269);
  rx: 5px;
  ry: 12px;
}

.rhjelkctf {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M14 19a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 10a4 4 0 1 1 0-8a4 4 0 0 1 0 8");
}
</style><path class="rhjelkctf"/><path class="b8jo61-qt"/><ellipse class="gafz2ebmh"/>`,
		"fallback": "twemoji:megaphone",
	});
}

export default Component;
