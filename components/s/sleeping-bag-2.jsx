import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tm9m4obqt.css';
import '../../css/k/keh46gbno.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tm9m4obqt"/><path class="keh46gbno"/></g>`,
		"fallback": "marketeq:sleeping-bag-2",
	});
}

export default Component;
