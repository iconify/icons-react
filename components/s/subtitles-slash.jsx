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
		"content": `<style>.vq93qoywx {
  fill: currentColor;
  d: path("M48 136a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8m165.92 74.62a8 8 0 1 1-11.84 10.76L189.92 208H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h12.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM175.37 192l-14.55-16H56a8 8 0 0 1 0-16h90.28l-14.55-16H104a8 8 0 0 1 0-16h13.19L59 64H32v128ZM200 144a8 8 0 0 0 0-16h-21.48a8 8 0 1 0 0 16Zm24-96H105.79a8 8 0 0 0 0 16H224v130.83a8 8 0 1 0 16 0V64a16 16 0 0 0-16-16");
}
</style><path class="vq93qoywx"/>`,
		"fallback": "ph:subtitles-slash",
	});
}

export default Component;
