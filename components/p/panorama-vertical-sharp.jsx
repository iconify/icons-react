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
		"content": `<style>.ye6pgo7cm {
  fill: currentColor;
  d: path("M5.014 20.989q.644-1.991 1.075-4.145t.43-4.855t-.43-4.856t-1.075-4.144H18.98q-.645 1.99-1.053 4.144q-.409 2.154-.409 4.856t.409 4.855t1.053 4.145z");
}
</style><path class="ye6pgo7cm"/>`,
		"fallback": "material-symbols-light:panorama-vertical-sharp",
	});
}

export default Component;
