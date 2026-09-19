import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yapliwlbi.css';
import '../../css/i/iwjfocmqa.css';
import '../../css/m/mku189b4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yapliwlbi"/><path class="iwjfocmqa"/><circle class="mku189b4i"/>`,
		"fallback": "flag:mk-1x1",
	});
}

export default Component;
