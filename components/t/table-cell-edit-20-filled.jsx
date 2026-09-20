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
		"content": `<style>.jzzpfn9yx {
  fill: currentColor;
  d: path("M8 13h1.985q.132-.175.288-.331L12 10.942V7H8zm7.102-5.16a2.9 2.9 0 0 1 .861-.593A2 2 0 0 0 15 7h-2v2.942zM5 13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2v6zm10.809-4.453l-4.83 4.829a2.2 2.2 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.2 2.2 0 0 0 1.02-.578l4.83-4.828a1.87 1.87 0 0 0-2.645-2.645");
}
</style><path class="jzzpfn9yx"/>`,
		"fallback": "fluent:table-cell-edit-20-filled",
	});
}

export default Component;
