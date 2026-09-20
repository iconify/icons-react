import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ah1hcpbhw.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/q/qrid-hb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ah1hcpbhw"/><circle class="zv6cqnbnp"/><path class="qrid-hb2b"/></g>`,
		"fallback": "lucide:map-pin-x",
	});
}

export default Component;
