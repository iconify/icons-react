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
		"content": `<style>.yt57u5bum {
  fill: currentColor;
  d: path("M14.854 2.854a.5.5 0 0 0-.708-.708L12.5 3.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0zm0 9a.5.5 0 0 0-.708-.708L12.5 12.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0zM1.5 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm0 4.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z");
}
</style><path class="yt57u5bum"/>`,
		"fallback": "fluent:multiselect-rtl-16-regular",
	});
}

export default Component;
