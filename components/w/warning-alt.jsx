import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ki1ly-b8p.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/r/r-kj38pzt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ki1ly-b8p"/><path class="ld54_pb1a"/><path class="r-kj38pzt"/></g>`,
		"fallback": "marketeq:warning-alt",
	});
}

export default Component;
