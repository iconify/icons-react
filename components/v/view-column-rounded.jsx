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
		"content": `<style>.k8lq0gbqd {
  fill: currentColor;
  d: path("M5.616 18q-.691 0-1.153-.462T4 16.384V7.616q0-.691.463-1.153T5.616 6H7.21q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T7.21 18zm5.594 0q-.69 0-1.153-.462t-.463-1.153v-8.77q0-.69.463-1.152T11.21 6h1.574q.691 0 1.154.463t.462 1.153v8.769q0 .69-.462 1.153T12.785 18zm5.575 0q-.69 0-1.153-.462t-.463-1.153v-8.77q0-.69.463-1.152T16.785 6h1.594q.69 0 1.153.463t.462 1.153v8.769q0 .69-.462 1.153T18.379 18z");
}
</style><path class="k8lq0gbqd"/>`,
		"fallback": "material-symbols-light:view-column-rounded",
	});
}

export default Component;
