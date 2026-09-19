import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfmx7b3v.css';
import '../../css/q/q71zpxnss.css';
import '../../css/a/apk-1jb4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtfmx7b3v"><path class="q71zpxnss"/><path class="apk-1jb4g"/></g>`,
		"fallback": "flat-color-icons:up",
	});
}

export default Component;
