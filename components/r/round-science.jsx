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
		"content": `<style>.iw9q_db8e {
  fill: currentColor;
  d: path("M20.54 17.73L15 11V5h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v6l-5.54 6.73c-.32.39-.46.83-.46 1.27c.01 1.03.82 2 2 2h14c1.19 0 2-.97 2-2c0-.44-.14-.88-.46-1.27");
}
</style><path class="iw9q_db8e"/>`,
		"fallback": "ic:round-science",
	});
}

export default Component;
