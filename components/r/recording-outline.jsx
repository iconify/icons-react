import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze2v6yb1y.css';
import '../../css/s/sh_nibbxh.css';
import '../../css/t/tznu3_bdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ze2v6yb1y"/><circle class="sh_nibbxh"/><path class="tznu3_bdm"/>`,
		"fallback": "famicons:recording-outline",
	});
}

export default Component;
