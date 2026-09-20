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
		"content": `<style>.hhc1xw5st {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M21 24a3 3 0 0 1-6 0V5a3 3 0 1 1 6 0z");
}

.ibazdcbva {
  cx: 18px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--be1931, #be1931);
}
</style><circle class="ibazdcbva"/><path class="hhc1xw5st"/>`,
		"fallback": "twemoji:red-exclamation-mark",
	});
}

export default Component;
