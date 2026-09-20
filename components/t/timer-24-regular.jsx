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
		"content": `<style>.i5c922l_u {
  fill: currentColor;
  d: path("M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17m0 1.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14M12 8a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102l-.007-.102v-4.5A.75.75 0 0 1 12 8m7.147-2.886l.083.06l1.158.964a.75.75 0 0 1-.877 1.212l-.082-.06l-1.159-.964a.75.75 0 0 1 .877-1.212M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5z");
}
</style><path class="i5c922l_u"/>`,
		"fallback": "fluent:timer-24-regular",
	});
}

export default Component;
