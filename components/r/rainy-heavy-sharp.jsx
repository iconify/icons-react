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
		"content": `<style>.t4dxmqybd {
  fill: currentColor;
  d: path("M7.78 18.677L1.324 5.781l.896-.452l6.458 12.885zm4.657 0L5.998 5.781l.896-.458l6.452 12.89zm4.675 0L10.673 5.781l.89-.458l6.439 12.871zm4.669-.006l-6.452-12.89l.89-.458l6.458 12.896z");
}
</style><path class="t4dxmqybd"/>`,
		"fallback": "material-symbols-light:rainy-heavy-sharp",
	});
}

export default Component;
