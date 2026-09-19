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
		"content": `<style>.eswtxh23x {
  fill: currentColor;
  d: path("m11.33 3.6l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0M12 16c-1.1 0-2-.9-2-2c0-.78.99-2.44 1.58-3.36c.2-.31.64-.31.84 0c.59.92 1.58 2.58 1.58 3.36c0 1.1-.9 2-2 2");
}
</style><path class="eswtxh23x"/>`,
		"fallback": "ic:round-water-damage",
	});
}

export default Component;
