import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqffoys6v.css';
import '../../css/v/v03ymlbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqffoys6v"/><path class="v03ymlbsg"/>`,
		"fallback": "boxicons:trash",
	});
}

export default Component;
