import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyfchs7dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyfchs7dc"/>`,
		"fallback": "griddy-icons:translate-alt",
	});
}

export default Component;
