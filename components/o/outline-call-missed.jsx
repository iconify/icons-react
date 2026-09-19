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
		"content": `<style>.bsz3opb4z {
  fill: currentColor;
  d: path("M19.59 7L12 14.59L6.41 9H11V7H3v8h2v-4.59l7 7l9-9z");
}
</style><path class="bsz3opb4z"/>`,
		"fallback": "ic:outline-call-missed",
	});
}

export default Component;
