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
		"content": `<style>.sv7ltbb7z {
  fill: currentColor;
  d: path("m12 13l8-5V6l-8 5l-8-5v2zm.175 7H2V4h20v9.025q-.775-.5-1.662-.763T18.5 12q-2.7 0-4.6 1.9T12 18.5q0 .4.037.775t.138.725m6.325 3q-.15 0-.2-.15q-.4-1.525-1.513-2.637T14.15 18.7q-.15-.05-.15-.2q0-.175.15-.2q1.525-.4 2.638-1.513T18.3 14.15q.05-.15.2-.15t.2.15q.4 1.525 1.513 2.638T22.85 18.3q.15.025.15.2q0 .15-.15.2q-1.525.4-2.637 1.513T18.7 22.85q-.025.15-.2.15");
}
</style><path class="sv7ltbb7z"/>`,
		"fallback": "material-symbols:mail-spark-sharp",
	});
}

export default Component;
