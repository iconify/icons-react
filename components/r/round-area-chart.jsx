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
		"content": `<style>.we5v9gbib {
  fill: currentColor;
  d: path("m8 17l3.39-4.66c.33-.46.98-.55 1.42-.2L21 18.5v.5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5.72c.22 0 .44.07.62.22zm-5-6c.44 0 .88.15 1.25.44l3.37 2.69l2.77-3.81c.66-.91 1.95-1.1 2.85-.4L21 15.97V8c0-.55-.45-1-1-1h-3l-4.18-3.34a1 1 0 0 0-1.44.2L7 10L3.6 7.45c-.18-.13-.39-.2-.6-.2z");
}
</style><path class="we5v9gbib"/>`,
		"fallback": "ic:round-area-chart",
	});
}

export default Component;
