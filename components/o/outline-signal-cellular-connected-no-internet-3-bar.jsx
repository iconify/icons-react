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
		"content": `<style>.oteakiifw {
  fill: currentColor;
  d: path("M18 22V6L2 22zm2-12v8h2v-8zm0 12h2v-2h-2z");
}

.prp8dgy0l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M22 8V2L2 22h16V8z");
}
</style><path class="prp8dgy0l"/><path class="oteakiifw"/>`,
		"fallback": "ic:outline-signal-cellular-connected-no-internet-3-bar",
	});
}

export default Component;
