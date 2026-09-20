import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o90fnvbiu.css';
import '../../css/q/qy0a994nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o90fnvbiu"/><path class="qy0a994nu"/>`,
		"fallback": "si:movie-fill",
	});
}

export default Component;
