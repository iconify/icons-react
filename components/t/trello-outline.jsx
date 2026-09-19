import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3ghoeb5r.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3ghoeb5r"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:trello-outline",
	});
}

export default Component;
