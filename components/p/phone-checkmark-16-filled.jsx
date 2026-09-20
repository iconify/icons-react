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
		"content": `<style>.hel-cnbil {
  fill: currentColor;
  d: path("M10.5 11a5.5 5.5 0 0 0 1.5-.207v2.457A1.75 1.75 0 0 1 10.25 15h-4.5A1.75 1.75 0 0 1 4 13.25V2.75C4 1.784 4.784 1 5.75 1h1.587A5.5 5.5 0 0 0 10.5 11M7 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm8-6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 6.293l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="hel-cnbil"/>`,
		"fallback": "fluent:phone-checkmark-16-filled",
	});
}

export default Component;
