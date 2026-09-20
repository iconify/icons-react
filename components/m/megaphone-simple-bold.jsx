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
		"content": `<style>.k3kthvcud {
  fill: currentColor;
  d: path("m229.7 82.84l-175.94-54l-.16-.05A20 20 0 0 0 28 48v144a20 20 0 0 0 19.94 20a20.4 20.4 0 0 0 5.66-.81h.16l78.24-24V196a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-30.94l25.7-7.89A20.1 20.1 0 0 0 244 138v-36a20.1 20.1 0 0 0-14.3-19.16M52 186.58V53.43L132 78v84ZM180 192h-24v-12.22l24-7.36Zm40-56.95l-64 19.63V85.33L220 105Z");
}
</style><path class="k3kthvcud"/>`,
		"fallback": "ph:megaphone-simple-bold",
	});
}

export default Component;
