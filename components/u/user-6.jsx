import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bjgikt15a.css';
import '../../css/m/m-p3eebiz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bjgikt15a"/><path class="m-p3eebiz"/></g>`,
		"fallback": "marketeq:user-6",
	});
}

export default Component;
