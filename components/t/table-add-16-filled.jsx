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
		"content": `<style>.rc20v79fk {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5V5h3V2zM6 2h4v3H6zM5 6H2v4h3zm1 1.337A5.5 5.5 0 0 1 7.337 6H6zM5 11H2v.5A2.5 2.5 0 0 0 4.5 14H5zm9-6v-.5A2.5 2.5 0 0 0 11.5 2H11v3zm1 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11z");
}
</style><path class="rc20v79fk"/>`,
		"fallback": "fluent:table-add-16-filled",
	});
}

export default Component;
