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
		"content": `<style>.d3io1wbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 12.572v23.316l-8.627-9.127v8.601a1.935 1.935 0 0 1-1.93 1.94H6.439a1.935 1.935 0 0 1-1.939-1.93V12.637c0-1.074.865-1.94 1.939-1.94h26.496c1.074 0 1.939.866 1.939 1.94v9.06z");
}
</style><path class="d3io1wbyv"/>`,
		"fallback": "arcticons:videocrop",
	});
}

export default Component;
