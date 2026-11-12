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

.yakqyacco {
  fill: currentColor;
  d: path("M12 13C15.866 13 19 14.7909 19 17C19 19.2091 15.866 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13Z");
}
</style><path class="yakqyacco"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-rounded-bold",
	});
}

export default Component;
