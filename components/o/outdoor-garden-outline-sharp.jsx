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
		"content": `<style>.s9xqsmb6z {
  fill: currentColor;
  d: path("M2.5 20.5V6.25L6 3.616l3 2.25l3-2.25l3 2.25l3-2.25l3.5 2.634V20.5zm1-1h5V6.75L6 4.866L3.5 6.75zm6 0h5V6.75L12 4.866L9.5 6.75zm6 0h5V6.75L18 4.866L15.5 6.75z");
}
</style><path class="s9xqsmb6z"/>`,
		"fallback": "material-symbols-light:outdoor-garden-outline-sharp",
	});
}

export default Component;
