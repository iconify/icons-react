import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr30gg_qg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vr30gg_qg"/>`,
		"fallback": "streamline:subscription-cashflow-solid",
	});
}

export default Component;
