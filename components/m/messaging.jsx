import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ibtl13bhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.1 6.33a2.56 2.56 0 0 0-2.57 2.56v7.66h-9L8.8 24v15.1a2.56 2.56 0 0 0 2.56 2.58h20.09A2.57 2.57 0 0 0 34 39.11v-7.66h2.6a2.55 2.55 0 0 0 2.57-2.56V13.77l4.3-7.44zM34 28.51v-9.39a2.57 2.57 0 0 0-2.56-2.57h-15M17 24.2a1.87 1.87 0 0 1 0 3.74a1.87 1.87 0 0 1 0-3.74m8.75 0A1.87 1.87 0 1 1 24 26a1.87 1.87 0 0 1 1.83-1.83ZM15 31.36h12.84a6.7 6.7 0 0 1-12.85 0Zm-1.47-14.81h2.93m17.57 11.96v2.94M18.89 12.91h15.33");
}
</style><path class="ibtl13bhu"/>`,
		"fallback": "arcticons:messaging",
	});
}

export default Component;
