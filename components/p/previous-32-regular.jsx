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
		"content": `<style>.nz-wmur9e {
  fill: currentColor;
  d: path("M6 5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0zm22.003 1.504c0-2.002-2.236-3.192-3.897-2.073l-14.003 9.432A2.5 2.5 0 0 0 10.09 18l14.003 9.56c1.66 1.132 3.91-.056 3.91-2.065zm-2.78-.414a.5.5 0 0 1 .78.414v18.992a.5.5 0 0 1-.782.412L11.218 16.35a.5.5 0 0 1 .002-.828z");
}
</style><path class="nz-wmur9e"/>`,
		"fallback": "fluent:previous-32-regular",
	});
}

export default Component;
