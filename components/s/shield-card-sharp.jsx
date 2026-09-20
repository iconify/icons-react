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
		"content": `<style>.bi833rbxo {
  fill: currentColor;
  d: path("M11 22v-9h12v9zm2-2h8v-2h-8zm0-4h8v-1h-8zm-4 4.7q-2.25-1.5-3.625-4.075T4 11.1V5l8-3l8 3v6H9z");
}
</style><path class="bi833rbxo"/>`,
		"fallback": "material-symbols:shield-card-sharp",
	});
}

export default Component;
