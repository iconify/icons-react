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
		"content": `<style>.sctcz6bpt {
  fill: var(--svg-color--00aeef, #00aeef);
  d: path("M19.313 8.625h-5.625V6.937h-3.376v3.375h7.238L19.312 12v7.154L17.55 21H6.508l-1.82-1.846v-3.78h5.624v2.25h3.376v-3.937H6.465L4.688 12V4.846L6.508 3H17.55l1.762 1.846z");
}
</style><path class="sctcz6bpt"/>`,
		"fallback": "token-branded:sand",
	});
}

export default Component;
