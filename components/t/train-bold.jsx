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
		"content": `<style>.lqutvkk9k {
  fill: currentColor;
  d: path("M184 20H72a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V56a36 36 0 0 0-36-36M60 116V84h56v32Zm80-32h56v32h-56ZM72 44h112a12 12 0 0 1 12 12v4H60v-4a12 12 0 0 1 12-12m112 152H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12m-80-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="lqutvkk9k"/>`,
		"fallback": "ph:train-bold",
	});
}

export default Component;
