import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj2o2qrzb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj2o2qrzb"/>`,
		"fallback": "f7:square-pencil",
	});
}

export default Component;
