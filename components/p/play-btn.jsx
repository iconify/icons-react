import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbx2edc6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xbx2edc6q"/>`,
		"fallback": "stash:play-btn",
	});
}

export default Component;
