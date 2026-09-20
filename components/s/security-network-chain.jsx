import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoya6dbao.css';
import '../../css/m/m5l3mnb5w.css';
import '../../css/j/j_tp7ieis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoya6dbao"/><path class="m5l3mnb5w"/><path class="j_tp7ieis"/>`,
		"fallback": "streamline-freehand:security-network-chain",
	});
}

export default Component;
