import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi91kyoxc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yi91kyoxc"/>`,
		"fallback": "streamline-plump:paint-bucket-solid",
	});
}

export default Component;
