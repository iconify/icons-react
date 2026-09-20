import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7lzhdc8k.css';
import '../../css/x/xg4x14bqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7lzhdc8k"/><path class="xg4x14bqu"/>`,
		"fallback": "uim:multiply",
	});
}

export default Component;
