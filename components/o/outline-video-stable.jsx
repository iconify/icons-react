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
		"content": `<style>.km4ipibra {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 18V6h2.95l-2.33 8.73L16.82 18zm11.62-2.39l-8.55-2.29L8.38 8.4l8.56 2.29zM20 18h-2.95l2.34-8.73L7.18 6H20z");
}
</style><path class="km4ipibra"/>`,
		"fallback": "ic:outline-video-stable",
	});
}

export default Component;
