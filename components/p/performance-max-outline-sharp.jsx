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
		"content": `<style>.adeu-yb0t {
  fill: currentColor;
  d: path("M2 20V4h20v16H2Zm2-2h16V6H4v12Zm0 0V6v12Zm9.65-1L19 11.65l-1.4-1.425l-3.95 3.95l-3.65-3.65l-5 5l1.4 1.425l3.6-3.6L13.65 17Zm.1-5.5l.7-1.55l1.55-.7l-1.55-.7l-.7-1.55l-.7 1.55l-1.55.7l1.55.7l.7 1.55Z");
}
</style><path class="adeu-yb0t"/>`,
		"fallback": "material-symbols:performance-max-outline-sharp",
	});
}

export default Component;
