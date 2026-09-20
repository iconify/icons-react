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
		"content": `<style>.ti33s4bvw {
  fill: currentColor;
  d: path("M12 17.577L6.423 12L12 6.423L17.577 12z");
}
</style><path class="ti33s4bvw"/>`,
		"fallback": "material-symbols-light:stat-0-sharp",
	});
}

export default Component;
