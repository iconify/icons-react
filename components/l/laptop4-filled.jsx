import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx1e8bcvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nx1e8bcvs"/>`,
		"fallback": "reicon:laptop4-filled",
	});
}

export default Component;
