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
		"content": `<style>.uroel0b0l {
  fill: currentColor;
  d: path("M56.88 31.93a12 12 0 1 0-17.76 16.14L75.9 88.52l-36.67 39.29a12 12 0 0 0 4.31 19.33l51.18 20.47l-10.59 70.61a12 12 0 0 0 20.64 10l58.9-63.11l35.45 39a12 12 0 0 0 17.76-16.14Zm56.72 171.62l6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49l23.35-25l55.38 60.92Zm-2.19-135.49a12 12 0 0 1-.59-17l40.41-43.25a12 12 0 0 1 20.64 10l-10.59 70.58l51.18 20.47a12 12 0 0 1 4.31 19.33l-16.82 18a12 12 0 0 1-17.55-16.38l4.86-5.21l-43.72-17.49a12 12 0 0 1-7.41-12.92l6.27-41.77l-14 15a12 12 0 0 1-16.99.64");
}
</style><path class="uroel0b0l"/>`,
		"fallback": "ph:lightning-slash-bold",
	});
}

export default Component;
