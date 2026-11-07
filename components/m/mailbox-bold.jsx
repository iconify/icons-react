import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f284zkd5g.css';
import '../../css/u/urwlvr1tl.css';
import '../../css/o/oxxeywbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f284zkd5g"/><path class="urwlvr1tl"/><path class="oxxeywbxq"/>`,
		"fallback": "solar:mailbox-bold",
	});
}

export default Component;
