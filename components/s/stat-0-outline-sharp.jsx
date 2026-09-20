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
		"content": `<style>.tdlieuclz {
  fill: currentColor;
  d: path("M12 17.577L6.423 12L12 6.423L17.577 12zm0-1.427L16.15 12L12 7.85L7.85 12zM12 12");
}
</style><path class="tdlieuclz"/>`,
		"fallback": "material-symbols-light:stat-0-outline-sharp",
	});
}

export default Component;
