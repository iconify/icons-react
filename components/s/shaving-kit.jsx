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
		"content": `<style>.sdmzd3bag {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.419 4.563l6.01 6.011q1.766 1.767.001 3.534q-1.768 1.766-3.535.001l-2.476-2.476l-2.22 2.22q.154.361.154.786q0 .829-.586 1.414l-4.242 4.243q-.585.586-1.414.586t-1.414-.586t-.586-1.414t.586-1.414l4.243-4.243q1.117-1.117 2.235-.468l2.184-2.184l-2.475-2.475q-.733-.732-.733-1.767q0-1.036.733-1.768q.732-.733 1.768-.733q1.035 0 1.767.733");
}
</style><path class="sdmzd3bag"/>`,
		"fallback": "uix-solid:shaving-kit",
	});
}

export default Component;
