import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c84me5bzl.css';
import '../../css/d/dty59pw6a.css';
import '../../css/i/i0aiaupcg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c84me5bzl"/><path class="dty59pw6a"/><path class="i0aiaupcg"/>`,
		"fallback": "vaadin:rss",
	});
}

export default Component;
