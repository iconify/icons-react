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
		"content": `<style>.je2-8ddts {
  fill: currentColor;
  d: path("m20 16l-.01-6l-5.71-1.43A3 3 0 0 1 12.32 7H9V6h3.02L12 5H9V4h3V1H4v15zM5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3");
}
</style><path class="je2-8ddts"/>`,
		"fallback": "ic:sharp-roller-skating",
	});
}

export default Component;
