import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ois0iqb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ois0iqb6h"/>`,
		"fallback": "streamline-plump:notepad-text-solid",
	});
}

export default Component;
