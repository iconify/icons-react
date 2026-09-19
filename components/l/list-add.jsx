import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o64e54bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o64e54bqe"/>`,
		"fallback": "ci:list-add",
	});
}

export default Component;
