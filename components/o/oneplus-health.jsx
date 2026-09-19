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
		"content": `<style>.o1yuxcb4h {
  cx: 13.933px;
  cy: 15.116px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qf7p8ybho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43 17.077c0-5.654-4.583-10.238-10.237-10.238c-3.723 0-6.971 1.993-8.763 4.964c-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.314-20.422c.437-1.138.686-2.37.686-3.662");
}
</style><path class="qf7p8ybho"/><circle class="o1yuxcb4h"/>`,
		"fallback": "arcticons:oneplus-health",
	});
}

export default Component;
