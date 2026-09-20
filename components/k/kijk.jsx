import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ld_2subdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24c6.832-8.079 10.85-11.85 19.5-11.85S36.668 15.92 43.5 24m-39 0c6.832 8.079 10.85 11.85 19.5 11.85S36.668 32.08 43.5 24m-21.544-4.782v9.251");
}

.p_913bcga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.968 19.218v9.251a2.313 2.313 0 0 1-2.313 2.313M14.5 19.218v9.251m4.972 0l-3.809-4.625l3.809-4.595m-3.809 4.595H14.5m19-4.626v9.251m-4.972 0l3.809-4.625l-3.809-4.595m3.809 4.595H33.5");
}
</style><path class="ld_2subdy"/><path class="p_913bcga"/>`,
		"fallback": "arcticons:kijk",
	});
}

export default Component;
