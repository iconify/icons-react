import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6ir_ybos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o6ir_ybos"/>`,
		"fallback": "icon-park-solid:next",
	});
}

export default Component;
