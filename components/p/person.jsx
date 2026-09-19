import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk3_bpbmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk3_bpbmh"/>`,
		"fallback": "gravity-ui:person",
	});
}

export default Component;
