import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_-i9nb0q.css';
import '../../css/f/fbpj6ebdl.css';
import '../../css/q/qjwo1qbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r_-i9nb0q"/><path class="fbpj6ebdl"/><path class="qjwo1qbxu"/></g>`,
		"fallback": "hugeicons:wallet-cards",
	});
}

export default Component;
