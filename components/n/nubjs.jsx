import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrfh4bqnd.css';
import '../../css/f/fpe9bqb4y.css';
import '../../css/q/qcqglrpgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wrfh4bqnd"/><path class="fpe9bqb4y"/><circle class="qcqglrpgj"/>`,
		"fallback": "thesvg-color:nubjs",
	});
}

export default Component;
