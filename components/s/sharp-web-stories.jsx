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
		"content": `<style>.rep20fq8t {
  fill: currentColor;
  d: path("M17 4h2v16h-2zM2 2v20h13V2zm19 16h1.5V6H21z");
}
</style><path class="rep20fq8t"/>`,
		"fallback": "ic:sharp-web-stories",
	});
}

export default Component;
