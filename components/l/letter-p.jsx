import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.zubuv5ibd {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.777 9.342c0-1.458.868-2.418 2.419-2.418h5.488c4.559 0 7.938 2.977 7.938 7.41c0 4.527-3.504 7.349-7.751 7.349H15.43v5.085c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418zm4.651 8.248h3.162c1.954 0 3.194-1.426 3.194-3.287s-1.24-3.287-3.194-3.287h-3.162z");
}
</style><path class="x-kz1kb7j"/><path class="zubuv5ibd"/>`,
		"fallback": "twemoji:letter-p",
	});
}

export default Component;
