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
		"content": `<style>.ty6ejb1-v {
  fill: currentColor;
  d: path("M10.698 3.475a.75.75 0 0 0-1.395 0l-3.75 9.5a.75.75 0 0 0 1.395.55L8.142 10.5h3.717l1.194 3.025a.75.75 0 0 0 1.395-.55zM11.266 9H8.734l1.267-3.207zM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="ty6ejb1-v"/>`,
		"fallback": "fluent:text-baseline-20-filled",
	});
}

export default Component;
