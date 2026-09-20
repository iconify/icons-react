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
		"content": `<style>.mfg9evbks {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m8-2.622c0-.755-.99-1.037-1.387-.396L5.07 9.084a.6.6 0 0 0 .51.916H8v1a.5.5 0 0 0 1 0v-1h.5a.5.5 0 0 0 0-1H9zm-1 .877V9H6.3z");
}
</style><path class="mfg9evbks"/>`,
		"fallback": "fluent:number-circle-4-16-filled",
	});
}

export default Component;
