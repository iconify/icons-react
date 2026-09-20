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
		"content": `<style>.emvdnlbom {
  fill: currentColor;
  d: path("M3 7.385q1.058-2.227 3.502-3.566t5.44-1.338q2.139 0 4.16.746t4.013 2.279V3H21v4.385h-4.384V6.5H19.9q-1.938-1.585-3.906-2.36t-4.052-.775q-2.584 0-4.722 1.075T3.94 7.384zM10.806 21l-5.667-5.654l.92-.894l3.441.857V6.5h1v7.77h1.827V10h1v4.27h1.846V11h1v3.27H18V13h1v8z");
}
</style><path class="emvdnlbom"/>`,
		"fallback": "material-symbols-light:swipe-right-sharp",
	});
}

export default Component;
