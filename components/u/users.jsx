import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxpc2vbsc.css';
import '../../css/p/p575c8b4f.css';

const viewBox = {"width":18,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxpc2vbsc"/><path class="p575c8b4f"/>`,
		"fallback": "icomoon-free:users",
	});
}

export default Component;
