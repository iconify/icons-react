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
		"content": `<style>.un5xx6bvo {
  fill: currentColor;
  d: path("M7.45 21q-.65 0-1.175-.375t-.725-1l-3.075-9.2q-.2-.65 0-1.275t.75-1L10.85 2.8q.525-.35 1.15-.35t1.15.35l7.625 5.35q.55.375.75 1t0 1.275l-3.075 9.2q-.2.625-.725 1T16.55 21z");
}
</style><path class="un5xx6bvo"/>`,
		"fallback": "material-symbols:pentagon-rounded",
	});
}

export default Component;
