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
		"content": `<style>.o_uyrfbxt {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm4.119-1h10.65q.23 0 .423-.192t.192-.424v-9.84l-3 .975l-2.883-.923l-1.81 2.452l-2.882.943v3.057L7.64 16.5z");
}
</style><path class="o_uyrfbxt"/>`,
		"fallback": "material-symbols-light:manga",
	});
}

export default Component;
