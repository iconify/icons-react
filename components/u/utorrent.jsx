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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cs_ja1o2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.759 15.732v10.24a6.24 6.24 0 0 0 6.185 6.296H24a6.24 6.24 0 0 0 6.242-6.24V15.73m-.001 10.297v6.242m-12.482-6.298V40.21");
}
</style><path class="cs_ja1o2h"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:utorrent",
	});
}

export default Component;
