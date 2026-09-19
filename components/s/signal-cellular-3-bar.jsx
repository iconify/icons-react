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
		"content": `<style>.eol4_l0on {
  fill: currentColor;
  d: path("M17 7L2 22h15z");
}

.mnumfnbbo {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M2 22h20V2z");
}
</style><path class="mnumfnbbo"/><path class="eol4_l0on"/>`,
		"fallback": "ic:signal-cellular-3-bar",
	});
}

export default Component;
