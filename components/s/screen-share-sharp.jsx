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
		"content": `<style>.pvg437b1a {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13zm5.77-3.346h1v-2q0-.618.44-1.06q.442-.44 1.06-.44h2v1.307l1.807-1.807l-1.808-1.808v1.308h-2q-1.042 0-1.77.729q-.73.729-.73 1.77z");
}
</style><path class="pvg437b1a"/>`,
		"fallback": "material-symbols-light:screen-share-sharp",
	});
}

export default Component;
