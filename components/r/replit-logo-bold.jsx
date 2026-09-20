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
		"content": `<style>.lqa__wb-c {
  fill: currentColor;
  d: path("M216 84h-60V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h60v40H72a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h64a20 20 0 0 0 20-20v-44h60a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-84 128H76v-40h56Zm0-128H76V44h56Zm80 64h-56v-40h56Z");
}
</style><path class="lqa__wb-c"/>`,
		"fallback": "ph:replit-logo-bold",
	});
}

export default Component;
