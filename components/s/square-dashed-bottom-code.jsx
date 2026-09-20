import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jv6jl8s7q.css';
import '../../css/c/ck0-rybti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jv6jl8s7q"/><path class="ck0-rybti"/></g>`,
		"fallback": "lucide:square-dashed-bottom-code",
	});
}

export default Component;
