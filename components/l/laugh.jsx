import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm_qsybka.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dwtkkyb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm_qsybka"/><path class="bwibdw4bb"/><path class="dwtkkyb2q"/>`,
		"fallback": "boxicons:laugh",
	});
}

export default Component;
