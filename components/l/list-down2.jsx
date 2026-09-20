import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh2zh0bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh2zh0bzs"/>`,
		"fallback": "reicon:list-down2",
	});
}

export default Component;
