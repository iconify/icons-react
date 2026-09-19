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
		"content": `<style>.bn6ebpb5p {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z");
}

.rfoe2vb2f {
  fill: currentColor;
  d: path("M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z");
}
</style><path class="rfoe2vb2f"/><path class="bn6ebpb5p"/>`,
		"fallback": "ic:outline-view-kanban",
	});
}

export default Component;
