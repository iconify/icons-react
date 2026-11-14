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
		"content": `<style>.wh4t8ccha {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.25q-3.25 0-3.25 3.25q0 1.792.988 2.596l-4.111 8.223q-.404-.069-.877-.069q-3.25 0-3.25 3.25t3.25 3.25q2.85 0 3.201-2.5h8.129q.196.874.871 1.549q.952.953 2.299.953t2.299-.953t.951-2.3q.001-1.345-.951-2.298t-2.299-.953q-.452 0-.859.107l-4.129-8.259q.988-.804.988-2.596q0-3.25-3.25-3.25m4.08 16.5H7.951q-.171-1.221-.939-1.846l4.111-8.223q.404.069.877.069t.877-.069l4.2 8.4q-.064.058-.126.12q-.675.675-.871 1.549");
}
</style><path class="wh4t8ccha"/>`,
		"fallback": "uix-solid:mesh-wifi",
	});
}

export default Component;
