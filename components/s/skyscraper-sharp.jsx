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
		"content": `<style>.grbtjmlza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M8 21V5h2V3h4v2h2v16M12 8h.01M12 12h.01M12 16h.01");
}
</style><path class="grbtjmlza"/>`,
		"fallback": "coolicons:skyscraper-sharp",
	});
}

export default Component;
