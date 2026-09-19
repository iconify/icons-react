import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qt1es7b7z.css';
import '../../css/v/v56p69bqh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qt1es7b7z"/><path class="v56p69bqh"/></g>`,
		"fallback": "icon-park-solid:landing",
	});
}

export default Component;
