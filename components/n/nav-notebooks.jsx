import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am_4qubdp.css';
import '../../css/l/l70u19-fs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am_4qubdp"/><path class="l70u19-fs"/>`,
		"fallback": "oui:nav-notebooks",
	});
}

export default Component;
