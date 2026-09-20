import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1i6g_bkz.css';
import '../../css/m/m_1p5wbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k1i6g_bkz"/><path class="m_1p5wbpc"/></g>`,
		"fallback": "tabler:message-language",
	});
}

export default Component;
