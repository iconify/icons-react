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
		"content": `<style>.rdyvtebzo {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M7.707 18.708a1.003 1.003 0 0 1 0-1.414l9.585-9.586a1.003 1.003 0 0 1 1.414 0l9.587 9.587a1.003 1.003 0 0 1 0 1.414l-9.587 9.585a1.003 1.003 0 0 1-1.414 0z");
}
</style><path class="rdyvtebzo"/>`,
		"fallback": "twemoji:small-blue-diamond",
	});
}

export default Component;
