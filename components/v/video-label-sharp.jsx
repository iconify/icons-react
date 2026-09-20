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
		"content": `<style>.k8be6abhw {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-5h16V6H4z");
}
</style><path class="k8be6abhw"/>`,
		"fallback": "material-symbols:video-label-sharp",
	});
}

export default Component;
