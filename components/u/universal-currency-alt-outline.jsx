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
		"content": `<style>.c2cwmvjhp {
  fill: currentColor;
  d: path("M15 16h4v-4h-1.5v2.5H15zm-3-1q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m-7-3h1.5V9.5H9V8H5zm-3 7V5h20v14zm2-2h16V7H4zm0 0V7z");
}
</style><path class="c2cwmvjhp"/>`,
		"fallback": "material-symbols:universal-currency-alt-outline",
	});
}

export default Component;
