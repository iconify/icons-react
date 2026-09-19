import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfmx7b3v.css';
import '../../css/b/badteebsr.css';
import '../../css/a/ahp19lbao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtfmx7b3v"><path class="badteebsr"/><path class="ahp19lbao"/></g>`,
		"fallback": "flat-color-icons:right",
	});
}

export default Component;
