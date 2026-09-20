import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbhexrb5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbhexrb5p"/>`,
		"fallback": "streamline-plump:scissors-solid",
	});
}

export default Component;
