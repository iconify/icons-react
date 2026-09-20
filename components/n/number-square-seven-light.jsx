import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sph4racuc {
  fill: currentColor;
  d: path("M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM156.91 84.56a6 6 0 0 1 .73 5.49l-32 88A6 6 0 0 1 120 182a6.2 6.2 0 0 1-2-.36a6 6 0 0 1-3.59-7.69L143.43 94H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.91 2.56");
}
</style><path class="sph4racuc"/>`,
		"fallback": "ph:number-square-seven-light",
	});
}

export default Component;
