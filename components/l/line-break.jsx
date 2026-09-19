import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dql26ryfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dql26ryfr"/>`,
		"fallback": "ci:line-break",
	});
}

export default Component;
