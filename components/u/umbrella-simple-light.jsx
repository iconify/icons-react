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
		"content": `<style>.zsy7-ab9m {
  fill: currentColor;
  d: path("M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0a6 6 0 0 0-12 0a18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21m-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65a2 2 0 0 1-.53-1.56a98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z");
}
</style><path class="zsy7-ab9m"/>`,
		"fallback": "ph:umbrella-simple-light",
	});
}

export default Component;
