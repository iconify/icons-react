import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5_pmkbbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5_pmkbbx"/>`,
		"fallback": "bi:slash-circle-fill",
	});
}

export default Component;
