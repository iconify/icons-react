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
		"content": `<style>.weu_65beh {
  fill: currentColor;
  d: path("M8 8h2V5H8zm0 9h2v-5H8zm-2 5q-.825 0-1.412-.587T4 20v-9h16v9q0 .825-.587 1.413T18 22zM4 9V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v5z");
}
</style><path class="weu_65beh"/>`,
		"fallback": "material-symbols:kitchen",
	});
}

export default Component;
