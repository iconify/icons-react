import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv25jylpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv25jylpb"/>`,
		"fallback": "garden:upload-fill-16",
	});
}

export default Component;
