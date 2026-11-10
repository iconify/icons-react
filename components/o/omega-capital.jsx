import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wjtpquq-y.css';
import '../../css/a/al_l5jbtl.css';
import '../../css/a/ak48c3ffn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wjtpquq-y"/><path class="al_l5jbtl"/><path class="ak48c3ffn"/></g>`,
		"fallback": "matita:omega-capital",
	});
}

export default Component;
