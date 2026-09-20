import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrew4e9yv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vrew4e9yv"/>`,
		"fallback": "streamline-plump:play-list-folder-solid",
	});
}

export default Component;
