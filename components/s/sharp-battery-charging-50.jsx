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
		"content": `<style>.tanht8vcw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v9.5h2.53L13 7v5.5h2l-.53 1H17z");
}

.wkrwuqbos {
  fill: currentColor;
  d: path("M14.47 13.5L11 20v-5.5H9l.53-1H7V22h10v-8.5z");
}
</style><path class="wkrwuqbos"/><path class="tanht8vcw"/>`,
		"fallback": "ic:sharp-battery-charging-50",
	});
}

export default Component;
