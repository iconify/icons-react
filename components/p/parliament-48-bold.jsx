import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5b5yobqi.css';
import '../../css/e/e7boe99qi.css';
import '../../css/o/os4jmsbas.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5b5yobqi"/><path class="e7boe99qi"/><path class="os4jmsbas"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:parliament-48-bold",
	});
}

export default Component;
