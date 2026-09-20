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
		"content": `<style>.ny8bffbqt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123ZM10 5.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z");
}
</style><path clip-rule="evenodd" class="ny8bffbqt"/>`,
		"fallback": "pepicons-pop:pinpoint-filled",
	});
}

export default Component;
