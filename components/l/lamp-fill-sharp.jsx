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
		"content": `<style>.bp43icbqg {
  fill: currentColor;
  d: path("M15 2c.379 0 .725.214.894.553l4 8A1 1 0 0 1 19 12h-6v4h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3v-4H5a1 1 0 0 1-.894-1.447l4-8A1 1 0 0 1 9 2Z");
}
</style><path class="bp43icbqg"/>`,
		"fallback": "coolicons:lamp-fill-sharp",
	});
}

export default Component;
