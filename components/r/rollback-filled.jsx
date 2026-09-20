import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdqx10g5k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mdqx10g5k"/>`,
		"fallback": "lsicon:rollback-filled",
	});
}

export default Component;
