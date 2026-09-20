import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":297};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j1zvzcp_v {
  fill: var(--svg-color--2396f3, #2396f3);
  d: path("M174.656 28.438L125.717 0L74.646 31.723l49.621 27.414zm23.403 12.245L147.52 71.424l57.28 33.109V192l-77.248 43.904L51.2 192v-68.267L0 98.304v123.563l125.717 74.666L256 222.422V74.155z");
}
</style><path class="j1zvzcp_v"/>`,
		"fallback": "logos:uikit",
	});
}

export default Component;
