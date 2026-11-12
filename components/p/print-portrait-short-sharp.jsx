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
		"content": `<style>.flah4ol6h {
  fill: currentColor;
  d: path("m2.45 17l-.775-1.225Q3.05 12.725 3.9 9.537T4.925 3h2.05V2h3v1H14V2h3v1h1l1 1q-.225 3.475-1.3 6.75T14.85 17zm2.525 4v-2h11.15q.825-1.475 1.525-2.937T19 13.125V21z");
}
</style><path class="flah4ol6h"/>`,
		"fallback": "material-symbols:print-portrait-short-sharp",
	});
}

export default Component;
