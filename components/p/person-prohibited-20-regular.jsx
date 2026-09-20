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
		"content": `<style>.hnsfyki0c {
  fill: currentColor;
  d: path("M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18q.617 0 1.21-.057a5.5 5.5 0 0 1-.618-.958Q9.301 17 9 17c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.59q.277-.538.658-1zM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9m-.707-.707a3.5 3.5 0 0 1 4.9-4.9z");
}
</style><path class="hnsfyki0c"/>`,
		"fallback": "fluent:person-prohibited-20-regular",
	});
}

export default Component;
