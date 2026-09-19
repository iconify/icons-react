import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s17ei7m7j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s17ei7m7j"/>`,
		"fallback": "fluent-mdl2:number-sequence",
	});
}

export default Component;
