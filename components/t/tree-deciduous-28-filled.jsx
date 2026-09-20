import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.umuljfsuo {
  fill: currentColor;
  d: path("M9.21 5.562a5.002 5.002 0 0 1 9.58 0a5 5 0 0 1 4.021 6.303A5 5 0 0 1 20 21h-3v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3H8a5 5 0 0 1-2.811-9.135A5 5 0 0 1 9.21 5.562M12.5 24a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-3h-3z");
}
</style><path class="umuljfsuo"/>`,
		"fallback": "fluent:tree-deciduous-28-filled",
	});
}

export default Component;
