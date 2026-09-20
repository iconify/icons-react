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
		"content": `<style>.q4ds1m0tg {
  fill: currentColor;
  d: path("M11.7 19q.285-.598.427-1.222q.142-.623.142-1.278q0-2.452-1.716-4.168t-4.169-1.717q-.913 0-1.775.275T3 11.699V5h12.635L21 12l-5.365 7zm-5.815 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="q4ds1m0tg"/>`,
		"fallback": "material-symbols-light:new-label-sharp",
	});
}

export default Component;
