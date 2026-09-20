import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rrlyub9hz {
  fill: currentColor;
  d: path("M2 3.5A1.5 1.5 0 0 1 3.5 2H11a2 2 0 0 1 2 2v.268A2 2 0 0 1 14 6v6a2 2 0 0 1-2 2H4.5A2.5 2.5 0 0 1 2 11.5zm1 0a.5.5 0 0 0 .5.5H12a1 1 0 0 0-1-1H3.5a.5.5 0 0 0-.5.5M10.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="rrlyub9hz"/>`,
		"fallback": "fluent:wallet-16-filled",
	});
}

export default Component;
