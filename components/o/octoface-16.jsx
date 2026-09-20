import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeks_mbgq.css';
import '../../css/m/m7hm-zmpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeks_mbgq"/><path class="m7hm-zmpb"/>`,
		"fallback": "octicon:octoface-16",
	});
}

export default Component;
