import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s98hn0ejv.css';
import '../../css/j/jm9p9sjox.css';
import '../../css/s/sololpbna.css';
import '../../css/w/wphbtcjgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s98hn0ejv"/><path clip-rule="evenodd" class="jm9p9sjox"/><circle class="sololpbna"/><path clip-rule="evenodd" class="wphbtcjgs"/>`,
		"fallback": "bitcoin-icons:node-1-connection-filled",
	});
}

export default Component;
