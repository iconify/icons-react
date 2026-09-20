import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-ns_sbzj.css';
import '../../css/v/vtzl9s38x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-ns_sbzj"/><path class="vtzl9s38x"/></g>`,
		"fallback": "lucide:scan-box",
	});
}

export default Component;
