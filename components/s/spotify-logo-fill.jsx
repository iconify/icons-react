import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pj6nwj0kv {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m31.07 145.74a8 8 0 0 1-10.81 3.33a42.79 42.79 0 0 0-40.52 0a8 8 0 0 1-7.48-14.14a59.33 59.33 0 0 1 55.48 0a8 8 0 0 1 3.33 10.81m16-28a8 8 0 0 1-10.82 3.3a77.07 77.07 0 0 0-72.48 0a8 8 0 0 1-7.52-14.12a93 93 0 0 1 87.52 0a8 8 0 0 1 3.29 10.84Zm16-28a8 8 0 0 1-10.83 3.29a110.62 110.62 0 0 0-104.46 0a8 8 0 0 1-7.54-14.12a126.67 126.67 0 0 1 119.54 0a8 8 0 0 1 3.28 10.85Z");
}
</style><path class="pj6nwj0kv"/>`,
		"fallback": "ph:spotify-logo-fill",
	});
}

export default Component;
