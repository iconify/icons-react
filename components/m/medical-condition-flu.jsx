import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xddr7tk8f.css';
import '../../css/j/j9d9kxuxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xddr7tk8f"/><path class="j9d9kxuxf"/></g>`,
		"fallback": "streamline-ultimate:medical-condition-flu",
	});
}

export default Component;
