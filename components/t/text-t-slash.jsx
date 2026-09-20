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
		"content": `<style>.zfs-6bbqe {
  fill: currentColor;
  d: path("M213.38 221.92a8 8 0 0 1-11.3-.54L136 148.69V192h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-60.91l-56-61.6V88a8 8 0 0 1-16 0V56a8 8 0 0 1 .72-3.31l-6.64-7.31a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3M105.79 64H120v16.43a8 8 0 0 0 16 0V64h56v24a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8h-94.21a8 8 0 0 0 0 16");
}
</style><path class="zfs-6bbqe"/>`,
		"fallback": "ph:text-t-slash",
	});
}

export default Component;
