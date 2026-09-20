import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdm9jbcnr.css';
import '../../css/e/erp-9sbvf.css';
import '../../css/m/mztshossz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdm9jbcnr"/><path class="erp-9sbvf"/><path class="mztshossz"/>`,
		"fallback": "octicon:repo-forked-24",
	});
}

export default Component;
