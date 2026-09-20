import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns9--7zyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ns9--7zyv"/>`,
		"fallback": "streamline-plump:line-arrow-right-circle-2-remix",
	});
}

export default Component;
