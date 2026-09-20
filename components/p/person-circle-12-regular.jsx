import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.slt4oue2i {
  fill: currentColor;
  d: path("M4.217 6.264A.75.75 0 0 1 4.775 6h2.45c.232 0 .427.118.558.264A.84.84 0 0 1 8 6.81v.16c0 .817-.817 1.53-2 1.53s-2-.713-2-1.53v-.16c0-.202.087-.4.217-.546M6 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 6A5 5 0 1 0 6 1a5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8a4 4 0 0 1 0 8");
}
</style><path class="slt4oue2i"/>`,
		"fallback": "fluent:person-circle-12-regular",
	});
}

export default Component;
