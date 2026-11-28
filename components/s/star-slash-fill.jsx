import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbsqk1mni.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbsqk1mni"/>`,
		"fallback": "pullo:star-slash-fill",
	});
}

export default Component;
