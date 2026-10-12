import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab8fc_wvr.css';
import '../../css/z/zd05-xlem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab8fc_wvr"/><path class="zd05-xlem"/>`,
		"fallback": "energy-icons:projector-48-bold",
	});
}

export default Component;
