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
		"content": `<style>.yo3wz3hzp {
  fill: currentColor;
  d: path("M12 17.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-14 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-14 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7-7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-14 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="yo3wz3hzp"/>`,
		"fallback": "fluent:office-apps-24-regular",
	});
}

export default Component;
