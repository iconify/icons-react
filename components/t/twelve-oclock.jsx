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
		"content": `<style>.bg7kebz_k {
  fill: var(--svg-color--67757f, #67757f);
  d: path("M18 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1");
}

.f934iu1fb {
  cx: 18px;
  cy: 18px;
  r: 14px;
  fill: var(--svg-color--e1e8ed, #e1e8ed);
}

.v3o-ukkqq {
  fill: var(--svg-color--67757f, #67757f);
  d: path("M18 19a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v9a1 1 0 0 1-1 1");
}

.yqfvb1bwf {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--99aab5, #99aab5);
}
</style><circle class="yqfvb1bwf"/><circle class="f934iu1fb"/><path class="bg7kebz_k"/><path class="v3o-ukkqq"/>`,
		"fallback": "twemoji:twelve-oclock",
	});
}

export default Component;
