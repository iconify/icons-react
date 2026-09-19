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
		"content": `<style>.vkl-2zbpe {
  fill: currentColor;
  d: path("M12 7V3H2v18h14v-2h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm14 12v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm-6-8h-2v2h2zm0 4h-2v2h2z");
}

.wwsvzwn9j {
  fill: currentColor;
  d: path("M12 9v2h2v2h-2v2h2v2h-2v2h4v-4h4V9zm6 4h-2v-2h2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wwsvzwn9j"/><path class="vkl-2zbpe"/>`,
		"fallback": "ic:twotone-domain-add",
	});
}

export default Component;
