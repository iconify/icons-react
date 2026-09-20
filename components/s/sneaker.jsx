import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ashxupbtl.css';
import '../../css/p/pux3mabuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ashxupbtl"/><path class="pux3mabuf"/></g>`,
		"fallback": "lucide-lab:sneaker",
	});
}

export default Component;
