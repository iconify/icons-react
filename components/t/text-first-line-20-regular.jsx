import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gmh1acb-q {
  fill: currentColor;
  d: path("M3.354 3.146a.5.5 0 1 0-.708.708L3.793 5L2.646 6.146a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708zM7.5 4a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm-5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5");
}
</style><path class="gmh1acb-q"/>`,
		"fallback": "fluent:text-first-line-20-regular",
	});
}

export default Component;
