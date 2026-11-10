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
		"content": `<style>.l5matxlnd {
  fill: currentColor;
  d: path("M19.811 3C20.093 2.98 20.55 3.12 20.756 3.32C20.953 3.59 21.063 4 20.955 4.32L15.467 20.32C15.339 20.69 15.003 20.96 14.61 20.99C14.218 21.03 13.84 20.83 13.647 20.49L9.991 13.98L3.505 10.35C3.161 10.16 2.969 9.7 3.004 9.31C3.085 8.98 3.344 8.64 3.669 8.53L19.811 3Z");
}
</style><path class="l5matxlnd"/>`,
		"fallback": "keyline-icons:navigation-up-right-sharp-fill",
	});
}

export default Component;
