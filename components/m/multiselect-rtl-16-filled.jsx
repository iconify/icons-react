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
		"content": `<style>.dtgeas6hg {
  fill: currentColor;
  d: path("M15.03 3.03a.75.75 0 0 0-1.06-1.06L12.5 3.44l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm-2 11l2-2a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0M1.75 3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="dtgeas6hg"/>`,
		"fallback": "fluent:multiselect-rtl-16-filled",
	});
}

export default Component;
