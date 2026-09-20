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
		"content": `<style>.c4kt71a1s {
  fill: currentColor;
  d: path("M12 22q-3.025 0-5.012-.812T5 18.5t1.988-2.687T12 15t5.013.813T19 18.5t-1.987 2.688T12 22m0-2q-2.525 0-4.05-.525T6.1 18q-.05.125-.075.25T6 18.5q0 1.125 1.637 1.813T12 21t4.363-.687T18 18.5q0-.125-.025-.25T17.9 18q-.325.95-1.85 1.475T12 20m3.6-1.425Q17 18.15 17 17.5t-1.4-1.075T12 16t-3.6.425T7 17.5t1.4 1.075T12 19t3.6-.425M11 14V9H9l4-7v5h2zm1 6");
}
</style><path class="c4kt71a1s"/>`,
		"fallback": "material-symbols:lightning-stand-outline",
	});
}

export default Component;
