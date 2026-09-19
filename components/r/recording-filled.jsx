import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_o20eohb.css';
import '../../css/j/jcay24bda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p_o20eohb"/><path class="jcay24bda"/>`,
		"fallback": "carbon:recording-filled",
	});
}

export default Component;
