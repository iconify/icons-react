import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk88l0bcp.css';
import '../../css/p/pwjoapuyf.css';
import '../../css/h/hnlbbjw7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk88l0bcp"/><path class="pwjoapuyf"/><path class="hnlbbjw7v"/>`,
		"fallback": "energy-icons:ladybird-48",
	});
}

export default Component;
