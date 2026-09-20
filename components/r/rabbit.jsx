import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kvncszb6j.css';
import '../../css/a/al693_s_d.css';
import '../../css/b/bf71pk20j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kvncszb6j"/><path class="al693_s_d"/><path class="bf71pk20j"/></g>`,
		"fallback": "lucide:rabbit",
	});
}

export default Component;
