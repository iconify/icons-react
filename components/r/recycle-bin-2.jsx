import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7-aj4bpj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7-aj4bpj"/>`,
		"fallback": "streamline:recycle-bin-2",
	});
}

export default Component;
