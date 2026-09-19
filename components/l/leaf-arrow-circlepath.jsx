import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_mec57ky.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_mec57ky"/>`,
		"fallback": "f7:leaf-arrow-circlepath",
	});
}

export default Component;
