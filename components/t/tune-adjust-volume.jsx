import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbtjk6bah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbtjk6bah"/>`,
		"fallback": "streamline-plump:tune-adjust-volume",
	});
}

export default Component;
