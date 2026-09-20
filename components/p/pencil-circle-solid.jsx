import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp-6ekjhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xp-6ekjhr"/>`,
		"fallback": "streamline-plump:pencil-circle-solid",
	});
}

export default Component;
