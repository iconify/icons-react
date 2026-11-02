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
		"content": `<style>.he1kkuz8r {
  fill: currentColor;
  d: path("m12.874 1.514l10 18A1 1 0 0 1 22 21H2a1 1 0 0 1-.874-1.486l10-18a1 1 0 0 1 1.748 0m-1.982 12.964l-1.185-1.185a.999.999 0 1 0-1.414 1.414l2 2A.998.998 0 0 0 11.8 16.6l3-4a1 1 0 0 0-1.6-1.2Z");
}
</style><path class="he1kkuz8r"/>`,
		"fallback": "coolicons:triangle-check-fill-sharp",
	});
}

export default Component;
