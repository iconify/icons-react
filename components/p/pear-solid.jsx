import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvkvv28pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvkvv28pp"/>`,
		"fallback": "iconaut:pear-solid",
	});
}

export default Component;
