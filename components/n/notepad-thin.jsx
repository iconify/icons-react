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
		"content": `<style>.a033k6d-m {
  fill: currentColor;
  d: path("M164 128a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m52-116v160a28 28 0 0 1-28 28H72a28 28 0 0 1-28-28V40a4 4 0 0 1 4-4h28V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h28a4 4 0 0 1 4 4m-8 4h-24v12a4 4 0 0 1-8 0V44h-40v12a4 4 0 0 1-8 0V44H84v12a4 4 0 0 1-8 0V44H52v156a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z");
}
</style><path class="a033k6d-m"/>`,
		"fallback": "ph:notepad-thin",
	});
}

export default Component;
