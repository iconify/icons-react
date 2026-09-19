import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbtys5b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbtys5b7q"/>`,
		"fallback": "gg:shape-square",
	});
}

export default Component;
