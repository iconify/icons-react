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
		"content": `<style>.ou9s7ccbv {
  fill: currentColor;
  d: path("M88 158h128a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14h-34V40a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v18H88a14 14 0 0 0-14 14v72a14 14 0 0 0 14 14m46-118a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v18h-36ZM86 72a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v72a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2Zm0 152a14 14 0 1 1-14-14a14 14 0 0 1 14 14m144 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14m16-40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h10V75.31a2 2 0 0 0-.59-1.41L19.76 52.24a6 6 0 1 1 8.48-8.48L49.9 65.41a13.94 13.94 0 0 1 4.1 9.9V178h186a6 6 0 0 1 6 6");
}
</style><path class="ou9s7ccbv"/>`,
		"fallback": "ph:trolley-suitcase-light",
	});
}

export default Component;
