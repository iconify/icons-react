import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs6eumz8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs6eumz8n"/>`,
		"fallback": "icon-park-outline:iron-three",
	});
}

export default Component;
