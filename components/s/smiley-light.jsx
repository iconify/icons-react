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
		"content": `<style>.b4m2rmh_l {
  fill: currentColor;
  d: path("M173.19 155c-9.92 17.16-26.39 27-45.19 27s-35.27-9.84-45.19-27a6 6 0 0 1 10.38-6c7.84 13.54 20.2 21 34.81 21s27-7.46 34.81-21a6 6 0 1 1 10.38 6M230 128A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90M92 118a10 10 0 1 0-10-10a10 10 0 0 0 10 10m72-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="b4m2rmh_l"/>`,
		"fallback": "ph:smiley-light",
	});
}

export default Component;
