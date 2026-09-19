import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s98hn0ejv.css';
import '../../css/t/tlit071fe.css';
import '../../css/i/ishbz4cce.css';
import '../../css/s/sololpbna.css';
import '../../css/r/rt617yb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s98hn0ejv"/><path clip-rule="evenodd" class="tlit071fe"/><circle class="ishbz4cce"/><circle class="sololpbna"/><circle class="rt617yb-v"/>`,
		"fallback": "bitcoin-icons:node-3-connections-filled",
	});
}

export default Component;
