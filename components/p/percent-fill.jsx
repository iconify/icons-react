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
		"content": `<style>.sdffsaciv {
  fill: currentColor;
  d: path("m19.707 5.707l-14 14a.999.999 0 1 1-1.414-1.414l14-14a.999.999 0 1 1 1.414 1.414M4 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="sdffsaciv"/>`,
		"fallback": "coolicons:percent-fill",
	});
}

export default Component;
