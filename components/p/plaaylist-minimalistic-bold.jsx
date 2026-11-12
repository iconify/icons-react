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
		"content": `<style>.n_blzqpck {
  fill: currentColor;
  d: path("M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05c.203.49.203 1.04 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333");
}

.y29dp-xoh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75");
}
</style><path clip-rule="evenodd" class="y29dp-xoh"/><path class="n_blzqpck"/>`,
		"fallback": "solar:plaaylist-minimalistic-bold",
	});
}

export default Component;
