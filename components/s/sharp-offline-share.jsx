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
		"content": `<style>.jm866rbkp {
  fill: currentColor;
  d: path("M20 1H8v18h12zm-2 14h-8V5h8z");
}

.r6fyrlbnb {
  fill: currentColor;
  d: path("M6 5H4v18h12v-2H6z");
}

.slugxqbcm {
  fill: currentColor;
  d: path("M12.5 10.25h2V12L17 9.5L14.5 7v1.75H11V12h1.5z");
}
</style><path class="r6fyrlbnb"/><path class="jm866rbkp"/><path class="slugxqbcm"/>`,
		"fallback": "ic:sharp-offline-share",
	});
}

export default Component;
