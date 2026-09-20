import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l-3klup6u {
  fill: currentColor;
  d: path("M10 2c1.515 0 2.932.422 4.14 1.153a.5.5 0 0 0-.14.348v1a.5.5 0 0 0 1 0v-.744A8 8 0 1 1 10 2M4.5 13.001a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m2 .999a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m2 1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m2 1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m2 1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m2 1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="l-3klup6u"/>`,
		"fallback": "fluent:sport-cricket-ball-20-filled",
	});
}

export default Component;
