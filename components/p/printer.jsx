import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p-y7x05xz.css';
import '../../css/n/nssru97re.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="p-y7x05xz"/><path class="nssru97re"/></g>`,
		"fallback": "streamline-plump:printer",
	});
}

export default Component;
