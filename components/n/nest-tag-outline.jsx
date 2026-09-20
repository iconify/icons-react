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
		"content": `<style>.aws-81-2r {
  fill: currentColor;
  d: path("M12 21q-2.507 0-4.253-1.748Q6 17.503 6 14.994q0-2.017 1.238-3.63t3.262-2.18V3.308q0-.33.232-.568q.233-.24.576-.24h1.384q.33 0 .569.24q.239.239.239.568v5.877q1.994.573 3.247 2.182Q18 12.977 18 14.994q0 2.51-1.757 4.258T12 21m0-1q2.075 0 3.538-1.45T17 15q0-2.075-1.463-3.537T12 10q-2.1 0-3.55 1.463T7 15q0 2.1 1.45 3.55T12 20");
}
</style><path class="aws-81-2r"/>`,
		"fallback": "material-symbols-light:nest-tag-outline",
	});
}

export default Component;
