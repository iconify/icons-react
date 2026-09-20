import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp3qnnb7o.css';
import '../../css/t/txgxuq1tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qp3qnnb7o"/><path class="txgxuq1tu"/></g>`,
		"fallback": "keyline-icons:milestone-two-tone",
	});
}

export default Component;
