import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qghu-3aqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qghu-3aqe"/>`,
		"fallback": "streamline-sharp:medical-folder-solid",
	});
}

export default Component;
