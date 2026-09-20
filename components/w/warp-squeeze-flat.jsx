import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3hdiqj7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3hdiqj7h"/>`,
		"fallback": "streamline-plump-color:warp-squeeze-flat",
	});
}

export default Component;
