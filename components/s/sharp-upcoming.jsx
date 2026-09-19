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
		"content": `<style>.ayhk6eozp {
  fill: currentColor;
  d: path("m21.16 7.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M11 3h2v5h-2zm-4.6 7.81L7.81 9.4L4.26 5.84L2.84 7.26c.11.03 3.56 3.55 3.56 3.55M22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20z");
}
</style><path class="ayhk6eozp"/>`,
		"fallback": "ic:sharp-upcoming",
	});
}

export default Component;
