import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cax46zj2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cax46zj2n"/>`,
		"fallback": "streamline-plump:recycle-1",
	});
}

export default Component;
