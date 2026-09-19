import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_sovfbpg.css';
import '../../css/e/ebu29qyhz.css';
import '../../css/u/u7krydeao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_sovfbpg"/><path class="ebu29qyhz"/><path class="u7krydeao"/>`,
		"fallback": "boxicons:podcast-filled",
	});
}

export default Component;
