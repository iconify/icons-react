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
		"content": `<style>.kg5b52cgo {
  fill: currentColor;
  d: path("m7.825 16l2.875 2.875q.3.3.313.7t-.288.7t-.712.3t-.713-.3L4.7 15.7q-.15-.15-.213-.325T4.426 15t.063-.375t.212-.325l4.625-4.625q.3-.3.7-.287t.7.312q.275.3.287.7t-.287.7l-2.9 2.9H17V5q0-.425.288-.712T18 4t.713.288T19 5v9q0 .825-.587 1.413T17 16z");
}
</style><path class="kg5b52cgo"/>`,
		"fallback": "material-symbols:subdirectory-arrow-left-outline-rounded",
	});
}

export default Component;
