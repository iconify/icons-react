import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uijf33kfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uijf33kfp"/>`,
		"fallback": "grommet-icons:tree-option",
	});
}

export default Component;
