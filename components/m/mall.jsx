import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk99xzecf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk99xzecf"/>`,
		"fallback": "streamline-plump:mall",
	});
}

export default Component;
