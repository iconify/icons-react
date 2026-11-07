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
		"content": `<style>.fl2lkkbpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16.5 10.875l3.394 1.697A2 2 0 0 1 21 14.362v3.152a2 2 0 0 1-1.106 1.789l-2.5 1.25a2 2 0 0 1-1.788 0L12 18.75l-3.606 1.803a2 2 0 0 1-1.788 0l-2.5-1.25A2 2 0 0 1 3 17.513v-3.152a2 2 0 0 1 1.106-1.789L7.5 10.875V6.486a2 2 0 0 1 1.106-1.789l2.5-1.25a2 2 0 0 1 1.788 0l2.5 1.25a2 2 0 0 1 1.106 1.79zM7.816 5.408L12 7.5l4.184-2.092M12 7.5v5.625m-4.5-2.25l4.5 2.25l4.5-2.25M3.316 13.283L7.5 15.375l4.5-2.25l4.5 2.25l4.184-2.092M7.5 15.375v5.389m4.5-7.639v5.625m4.5-3.375v5.389");
}
</style><path class="fl2lkkbpc"/>`,
		"fallback": "coolicons:packages-round",
	});
}

export default Component;
