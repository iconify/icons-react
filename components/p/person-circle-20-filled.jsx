import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vlo0f9blk {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.5 3h5a1.5 1.5 0 0 1 1.5 1.5c0 1.116-.459 2.01-1.212 2.615c-.741.595-1.735.885-2.788.885s-2.047-.29-2.788-.885C6.46 13.51 6 12.616 6 11.5A1.5 1.5 0 0 1 7.5 10");
}
</style><path class="vlo0f9blk"/>`,
		"fallback": "fluent:person-circle-20-filled",
	});
}

export default Component;
