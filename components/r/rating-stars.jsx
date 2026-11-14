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
		"content": `<style>.tjzugv6pz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.735 4.614l.392.728a1.5 1.5 0 0 0 1.052.765l.814.148a.835.835 0 0 1 .455 1.397l-.572.599a1.5 1.5 0 0 0-.402 1.237l.111.82a.835.835 0 0 1-1.189.863l-.746-.358a1.5 1.5 0 0 0-1.3 0l-.746.358a.835.835 0 0 1-1.189-.863l.111-.82a1.5 1.5 0 0 0-.402-1.237l-.572-.599a.835.835 0 0 1 .455-1.397l.814-.148a1.5 1.5 0 0 0 1.052-.765l.392-.728a.835.835 0 0 1 1.47 0m-5.574 9.101l.32.588a1.5 1.5 0 0 0 1.043.757l.658.123a.753.753 0 0 1 .409 1.258l-.46.486a1.5 1.5 0 0 0-.399 1.226l.087.664a.753.753 0 0 1-1.07.777l-.605-.287a1.5 1.5 0 0 0-1.288 0l-.605.287a.753.753 0 0 1-1.07-.777l.087-.664a1.5 1.5 0 0 0-.399-1.226l-.46-.486a.753.753 0 0 1 .409-1.258l.658-.123a1.5 1.5 0 0 0 1.043-.757l.32-.588a.753.753 0 0 1 1.322 0m11 0l.32.588a1.5 1.5 0 0 0 1.043.757l.658.123a.753.753 0 0 1 .409 1.258l-.46.486a1.5 1.5 0 0 0-.399 1.226l.087.664a.753.753 0 0 1-1.07.777l-.605-.287a1.5 1.5 0 0 0-1.288 0l-.605.287a.753.753 0 0 1-1.07-.777l.087-.664a1.5 1.5 0 0 0-.399-1.226l-.46-.486a.753.753 0 0 1 .409-1.258l.658-.123a1.5 1.5 0 0 0 1.043-.757l.32-.588a.753.753 0 0 1 1.322 0");
}
</style><path class="tjzugv6pz"/>`,
		"fallback": "uix:rating-stars",
	});
}

export default Component;
