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
		"content": `<style>.rc_73fm5y {
  fill: currentColor;
  d: path("M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zm-9-12A2.5 2.5 0 0 0 2 4.5v5a.5.5 0 0 0 .5.5H5a1.495 1.495 0 0 1 1-1.415V6h4v2.585A1.495 1.495 0 0 1 11 10h2.5a.5.5 0 0 0 .5-.5v-5A2.5 2.5 0 0 0 11.5 2zM13 6v3h-2V6zM5 9H3V6h2zm1-6h4v2H6zm5 0h.5A1.5 1.5 0 0 1 13 4.5V5h-2zM5 3v2H3v-.5A1.5 1.5 0 0 1 4.5 3zm1.146 6.646a.5.5 0 0 1 .708 0l.646.647V8.5a.5.5 0 0 1 1 0v1.793l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708");
}
</style><path class="rc_73fm5y"/>`,
		"fallback": "fluent:table-move-below-16-regular",
	});
}

export default Component;
