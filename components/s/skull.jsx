import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy8pq3bio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy8pq3bio"/>`,
		"fallback": "healthicons:skull",
	});
}

export default Component;
