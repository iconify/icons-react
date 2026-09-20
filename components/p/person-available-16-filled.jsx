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
		"content": `<style>.mu9fqkb5a {
  fill: currentColor;
  d: path("M8.889 5.24a5.5 5.5 0 0 0-2.623 1.75A2.5 2.5 0 1 1 8.89 5.24M3.5 8h2.1c-.384.75-.6 1.6-.6 2.5a5.48 5.48 0 0 0 1.22 3.455C3.554 13.64 2 11.73 2 10v-.25C2 8.955 2.672 8 3.5 8M15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L9.5 11.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708");
}
</style><path class="mu9fqkb5a"/>`,
		"fallback": "fluent:person-available-16-filled",
	});
}

export default Component;
