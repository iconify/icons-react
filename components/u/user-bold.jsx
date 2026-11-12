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
		"content": `<style>.lc21qzuqt {
  fill: currentColor;
  d: path("M12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2Z");
}

.xpkanabje {
  fill: currentColor;
  d: path("M12 13C16.4183 13 20 15.0147 20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13Z");
}
</style><path class="xpkanabje"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-bold",
	});
}

export default Component;
