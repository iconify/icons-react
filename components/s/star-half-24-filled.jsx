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
		"content": `<style>.n_fd13q9k {
  fill: currentColor;
  d: path("M12 2.35c-.482 0-.964.25-1.212.752L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.15.874.544 1.583 1.331 1.582c.208 0 .422-.05.63-.158l4.714-2.479z");
}
</style><path class="n_fd13q9k"/>`,
		"fallback": "fluent:star-half-24-filled",
	});
}

export default Component;
