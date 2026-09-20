import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.itmj933-g {
  fill: currentColor;
  d: path("M19.5 28a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm4-4a1 1 0 1 1 0 2h-15a1 1 0 1 1 0-2zm1.5-4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm0-4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM15.998 2c.509 0 .803.386 1.116.72c.76.811 2.48 2.725 4.206 5.222c1.211 1.751 2.46 3.838 3.364 6.058h-2.18c-.782-1.736-1.789-3.417-2.828-4.92a45 45 0 0 0-3.678-4.62a45 45 0 0 0-3.678 4.62c-1.04 1.503-2.046 3.184-2.828 4.92h-2.18c.903-2.22 2.153-4.307 3.364-6.058a47 47 0 0 1 4.206-5.222c.312-.333.611-.72 1.116-.72");
}
</style><path class="itmj933-g"/>`,
		"fallback": "fluent:weather-humidity-32-regular",
	});
}

export default Component;
