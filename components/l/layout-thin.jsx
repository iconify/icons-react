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
		"content": `<style>.rztvod3zt {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v44H36V56a4 4 0 0 1 4-4m-4 148v-92h64v96H40a4 4 0 0 1-4-4m180 4H108v-96h112v92a4 4 0 0 1-4 4");
}
</style><path class="rztvod3zt"/>`,
		"fallback": "ph:layout-thin",
	});
}

export default Component;
