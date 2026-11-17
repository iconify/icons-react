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
		"content": `<style>.l090985-u {
  fill: currentColor;
  d: path("M10 3v2h4V3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0m.5 10.5a1.002 1.002 0 0 0-1.707-.707C8.22 13.366 8 14.21 8 15a4 4 0 0 0 8 0c0-1.374-.29-2.704-1.293-3.707a1 1 0 0 0-.107-.093c-.801-.601-1.42-1.399-1.619-2.396a1.002 1.002 0 0 0-1.606-.585c-.649.52-1.233 1.175-1.486 1.983c-.238.763-.138 1.535.217 2.245q.084.166.175.328c.151.27.219.408.219.725");
}
</style><path class="l090985-u"/>`,
		"fallback": "coolicons:water-heater-fill-sharp",
	});
}

export default Component;
