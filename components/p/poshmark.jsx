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
		"content": `<style>.frlf8gb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.805 32.047V15.675l.002-.003c0-4.917 4.175-8.903 9.34-8.903s9.353 3.986 9.353 8.903c0 4.582-3.637 8.364-8.321 8.844");
}

.hq-dd7ffv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.198 15.945v16.373l-.005-.004c0 4.917-4.175 8.917-9.34 8.917s-9.353-4-9.353-8.917c0-4.51 3.52-8.234 8.074-8.816");
}
</style><path class="hq-dd7ffv"/><path class="frlf8gb6v"/>`,
		"fallback": "arcticons:poshmark",
	});
}

export default Component;
