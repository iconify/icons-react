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
		"content": `<style>.pzl_ewb7t {
  fill: currentColor;
  d: path("M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35l.59.65H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8.2c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2s3.2 1.43 3.2 3.2s-1.43 3.2-3.2 3.2");
}
</style><path class="pzl_ewb7t"/>`,
		"fallback": "ic:outline-local-see",
	});
}

export default Component;
