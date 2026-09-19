import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fcnl5gb0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.223 18.504H11m4.698 11.736H4.5m13.46-5.868H7.813");
}

.fmqppmdec {
  d: path("M25.234 30.99V17.01h4.634c2.673 0 4.811 2.097 4.811 4.718s-2.138 4.718-4.812 4.718h-4.633");
}

.wm65l7qap {
  d: path("M20.843 11.802a14.6 14.6 0 0 1 8.048-2.418C36.959 9.384 43.5 15.928 43.5 24h0c0 8.073-6.54 14.617-14.609 14.617a14.6 14.6 0 0 1-9.05-3.143");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="wm65l7qap"/><path class="fmqppmdec"/></g><path class="fcnl5gb0u"/>`,
		"fallback": "arcticons:rakuten-sps",
	});
}

export default Component;
