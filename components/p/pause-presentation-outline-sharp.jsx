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
		"content": `<style>.m-17n8sfd {
  fill: currentColor;
  d: path("M9 16h2V8H9zm4 0h2V8h-2zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="m-17n8sfd"/>`,
		"fallback": "material-symbols:pause-presentation-outline-sharp",
	});
}

export default Component;
