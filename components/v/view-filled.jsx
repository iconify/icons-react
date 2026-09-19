import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_o20eohb.css';
import '../../css/f/f23s2bc5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p_o20eohb"/><path class="f23s2bc5p"/>`,
		"fallback": "carbon:view-filled",
	});
}

export default Component;
