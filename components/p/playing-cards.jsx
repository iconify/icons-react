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
		"content": `<style>.qpub-9gzq {
  fill: currentColor;
  d: path("m15.2 14.8l1.15-4.15L12.8 8.2l-1.15 4.15zM4 18.825l-.825-.4q-.775-.325-1.05-1.112T2.2 15.75l1.8-3.9zM8 21q-.825 0-1.412-.6T6 18.975V13l2.675 7.35q.075.175.125.338t.175.312zm5.15-.125q-.775.275-1.55-.075t-1.05-1.125L6.125 7.45q-.275-.775.075-1.538t1.125-1.037l7.525-2.75q.775-.275 1.538.075t1.037 1.125l4.45 12.225q.275.775-.075 1.538t-1.125 1.037z");
}
</style><path class="qpub-9gzq"/>`,
		"fallback": "material-symbols:playing-cards",
	});
}

export default Component;
