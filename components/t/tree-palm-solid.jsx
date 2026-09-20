import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hax9i4bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hax9i4bwg"/>`,
		"fallback": "mynaui:tree-palm-solid",
	});
}

export default Component;
