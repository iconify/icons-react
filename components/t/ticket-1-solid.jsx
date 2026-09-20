import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9yzpjbww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9yzpjbww"/>`,
		"fallback": "streamline-plump:ticket-1-solid",
	});
}

export default Component;
