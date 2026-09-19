import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c846f2b3u.css';
import '../../css/c/c2gy29bva.css';
import '../../css/w/wj_gkq1ud.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c846f2b3u"/><path class="c2gy29bva"/><path class="wj_gkq1ud"/>`,
		"fallback": "devicon:kubernetes-wordmark",
	});
}

export default Component;
