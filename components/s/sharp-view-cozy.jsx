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
		"content": `<style>.ajvpkp0ft {
  fill: currentColor;
  d: path("M22 4H2v16h20zM11.25 16.75h-4v-4h4zm0-5.5h-4v-4h4zm5.5 5.5h-4v-4h4zm0-5.5h-4v-4h4z");
}
</style><path class="ajvpkp0ft"/>`,
		"fallback": "ic:sharp-view-cozy",
	});
}

export default Component;
