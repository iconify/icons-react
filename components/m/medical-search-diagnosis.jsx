import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ljmxa-k.css';
import '../../css/w/wh3a8fu7z.css';
import '../../css/l/labafylcg.css';
import '../../css/s/sucgr9bbf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-ljmxa-k"/><path class="wh3a8fu7z"/><path class="labafylcg"/><path class="sucgr9bbf"/></g>`,
		"fallback": "streamline-color:medical-search-diagnosis",
	});
}

export default Component;
