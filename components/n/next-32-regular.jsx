import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j98kxpblu {
  fill: currentColor;
  d: path("M26.002 5a1 1 0 1 1 2 0v22a1 1 0 0 1-2 0zM3.999 6.504c0-2.002 2.236-3.192 3.897-2.073l14.003 9.432A2.5 2.5 0 0 1 21.912 18L7.909 27.56c-1.66 1.132-3.91-.056-3.91-2.065zm2.78-.414a.5.5 0 0 0-.78.414v18.992a.5.5 0 0 0 .782.412l14.003-9.559a.5.5 0 0 0-.002-.828z");
}
</style><path class="j98kxpblu"/>`,
		"fallback": "fluent:next-32-regular",
	});
}

export default Component;
