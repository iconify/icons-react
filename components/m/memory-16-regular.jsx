import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.su8_10i6g {
  fill: currentColor;
  d: path("M14.414 4.586A2 2 0 0 0 13 4V2.5a.5.5 0 0 0-1 0V4h-2V2.5a.5.5 0 1 0-1 0V4H7V2.5a.5.5 0 1 0-1 0V4H4V2.5a.5.5 0 1 0-1 0V4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12h2v1.5a.5.5 0 0 0 1 0V12a2 2 0 0 0 2-2V6a2 2 0 0 0-.586-1.414M14 10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zm-1.5-4h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M12 9H4V7h8z");
}
</style><path class="su8_10i6g"/>`,
		"fallback": "fluent:memory-16-regular",
	});
}

export default Component;
