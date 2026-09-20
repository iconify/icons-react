import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js5um8b3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="js5um8b3a"/>`,
		"fallback": "streamline-plump:warehouse-1-remix",
	});
}

export default Component;
