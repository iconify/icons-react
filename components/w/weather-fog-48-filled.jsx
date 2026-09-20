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
		"content": `<style>.pg5lahbcq {
  fill: currentColor;
  d: path("M32.25 38.5a1.75 1.75 0 0 1 .144 3.494l-.143.006h-16.5a1.75 1.75 0 0 1-.144-3.494l.144-.006zm6-5.995a1.75 1.75 0 0 1 .144 3.494l-.143.006H9.75a1.75 1.75 0 0 1-.143-3.494l.143-.006zM24 6.01c6.337 0 9.932 4.194 10.455 9.26h.16c4.078 0 7.384 3.297 7.384 7.365S38.692 30 34.614 30h-21.23C9.306 30 6 26.703 6 22.635s3.306-7.365 7.384-7.365h.16C14.07 10.171 17.662 6.01 24 6.01");
}
</style><path class="pg5lahbcq"/>`,
		"fallback": "fluent:weather-fog-48-filled",
	});
}

export default Component;
