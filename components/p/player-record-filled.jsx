import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8dq-qb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8dq-qb0x"/>`,
		"fallback": "tabler:player-record-filled",
	});
}

export default Component;
