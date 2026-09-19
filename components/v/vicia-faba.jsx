import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lxx50rbdy.css';
import '../../css/v/vugmo3b-s.css';
import '../../css/k/ko5q309hq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="lxx50rbdy"/><path class="vugmo3b-s"/><path class="ko5q309hq"/></g>`,
		"fallback": "icon-park:vicia-faba",
	});
}

export default Component;
