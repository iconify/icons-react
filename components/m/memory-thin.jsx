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
		"content": `<style>.eotw6vbzm {
  fill: currentColor;
  d: path("M232 60H24a12 12 0 0 0-12 12v128a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0V72a12 12 0 0 0-12-12M20 72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4v100H20Zm92 76a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4Zm-60-48h56v40H52Zm92 48h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4m4-48h56v40h-56Z");
}
</style><path class="eotw6vbzm"/>`,
		"fallback": "ph:memory-thin",
	});
}

export default Component;
