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
		"content": `<style>.sho87rbzm {
  fill: var(--svg-color--36a4de, #36a4de);
  d: path("M7.2 13.02L3 6.9v13.8h12l-2.7-3.6H7.2zm.6-9.72l4.5 7.5l4.5-7.5H21v17.4h-4.2V9.9l-4.5 7.2L3 3.3z");
}
</style><path class="sho87rbzm"/>`,
		"fallback": "token-branded:lzm",
	});
}

export default Component;
