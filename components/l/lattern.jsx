import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/z8ianvbdo.css';
import '../../css/k/ku-fiwebi.css';
import '../../css/l/l6bnkfb9u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="z8ianvbdo"/><path class="ku-fiwebi"/><path class="l6bnkfb9u"/></g>`,
		"fallback": "marketeq:lattern",
	});
}

export default Component;
