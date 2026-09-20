import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_r7z49s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hu_r7z49s"/>`,
		"fallback": "streamline-plump:rotate-left-1-remix",
	});
}

export default Component;
