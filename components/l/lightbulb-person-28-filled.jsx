import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s33lhq4vg {
  fill: currentColor;
  d: path("M5 11a9 9 0 1 1 14.79 6.89a3 3 0 0 0-.397.404A8.96 8.96 0 0 0 14 16.5a8.96 8.96 0 0 0-5.393 1.794a3 3 0 0 0-.398-.404A8.98 8.98 0 0 1 5 11m9 7a7.47 7.47 0 0 1 4.837 1.768L18.54 21H9.46l-.296-1.232A7.47 7.47 0 0 1 14 18m-4.181 4.5l.242 1.008A3.25 3.25 0 0 0 13.22 26h1.558a3.25 3.25 0 0 0 3.16-2.492l.242-1.008zM11.5 11a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M14 7a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="s33lhq4vg"/>`,
		"fallback": "fluent:lightbulb-person-28-filled",
	});
}

export default Component;
