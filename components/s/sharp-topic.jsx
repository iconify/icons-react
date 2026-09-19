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
		"content": `<style>.z6fwdrb3p {
  fill: currentColor;
  d: path("m12 6l-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z");
}
</style><path class="z6fwdrb3p"/>`,
		"fallback": "ic:sharp-topic",
	});
}

export default Component;
