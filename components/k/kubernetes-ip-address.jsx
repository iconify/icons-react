import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob_nbubvj.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/q/qaq-ndbwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ob_nbubvj"/><circle class="e39ud6bwf"/><path class="qaq-ndbwn"/>`,
		"fallback": "carbon:kubernetes-ip-address",
	});
}

export default Component;
