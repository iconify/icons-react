import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plz817b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plz817b3q"/>`,
		"fallback": "reicon:square-transfer-v-filled",
	});
}

export default Component;
