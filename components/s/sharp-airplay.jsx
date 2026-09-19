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
		"content": `<style>.codrdcbyt {
  fill: currentColor;
  d: path("M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z");
}
</style><path class="codrdcbyt"/>`,
		"fallback": "ic:sharp-airplay",
	});
}

export default Component;
