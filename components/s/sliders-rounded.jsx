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
		"content": `<style>.ynvn33bgy {
  fill: currentColor;
  d: path("M5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9h14q1.25 0 2.125.875T22 12t-.875 2.125T19 15zm9-2h5q.425 0 .713-.288T20 12t-.288-.712T19 11h-5z");
}
</style><path class="ynvn33bgy"/>`,
		"fallback": "material-symbols:sliders-rounded",
	});
}

export default Component;
