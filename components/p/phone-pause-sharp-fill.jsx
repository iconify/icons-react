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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lhpbrabpz {
  d: path("M19 1V9H17V1H19ZM23 1V9H21V1H23Z");
}

.mnh7p60di {
  d: path("M9 1C9.552 1 10 1.45 10 2V8C10 8.31 9.851 8.61 9.6 8.8L8.339 9.75L8.57 10.19C9.765 12.4 11.576 14.21 13.777 15.41L14.254 15.66L15.238 14.35C15.425 14.15 15.725 14 16 14H22C22.552 14 23 14.45 23 15V20C23 21.66 21.657 23 20 23C9.507 23 1 14.49 1 4C1 2.34 2.343 1 4 1H9Z");
}
</style><g class="cuyn6tgcc"><path class="mnh7p60di"/><path class="lhpbrabpz"/></g>`,
		"fallback": "keyline-icons:phone-pause-sharp-fill",
	});
}

export default Component;
