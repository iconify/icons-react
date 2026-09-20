import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbxhj-o3i.css';
import '../../css/v/vbqfmsb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbxhj-o3i"/><path class="vbqfmsb6f"/>`,
		"fallback": "prime:undo",
	});
}

export default Component;
