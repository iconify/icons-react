import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pltis2bxu.css';
import '../../css/m/md286fbip.css';
import '../../css/x/xwvba7bli.css';
import '../../css/b/b88gxdbzy.css';
import '../../css/n/nffljcb4c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="pltis2bxu"/><g class="md286fbip"><path class="xwvba7bli"/><path class="b88gxdbzy"/><path class="nffljcb4c"/></g></g>`,
		"fallback": "cryptocurrency-color:tpay",
	});
}

export default Component;
