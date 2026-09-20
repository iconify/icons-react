import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9u3cub0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l9u3cub0c"/>`,
		"fallback": "streamline-plump:waving-hand-remix",
	});
}

export default Component;
