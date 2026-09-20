import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lnlwibbhc {
  fill: currentColor;
  d: path("M8.052 1.436a1.5 1.5 0 0 0-2.38.347L4.145 4.608l-2.33.928a.5.5 0 0 0-.169.818l1.647 1.647l-2.146 2.146l-.147.854l.854-.147L4 8.708l1.646 1.646a.5.5 0 0 0 .818-.168l.933-2.332l2.821-1.526a1.5 1.5 0 0 0 .347-2.38zm-1.5.822a.5.5 0 0 1 .793-.115l2.513 2.513a.5.5 0 0 1-.116.793L6.762 7.06a.5.5 0 0 0-.226.254L5.817 9.11L2.891 6.184l1.793-.715a.5.5 0 0 0 .254-.226z");
}
</style><path class="lnlwibbhc"/>`,
		"fallback": "fluent:pin-12-regular",
	});
}

export default Component;
