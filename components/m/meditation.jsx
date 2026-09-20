import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izs8fdueq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="izs8fdueq"/>`,
		"fallback": "reicon:meditation",
	});
}

export default Component;
