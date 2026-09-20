import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7_idmhbt.css';
import '../../css/y/ytn63gonz.css';
import '../../css/k/kmqwfkbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d7_idmhbt"/><path class="ytn63gonz"/><circle class="kmqwfkbdg"/></g>`,
		"fallback": "lucide:undo-dot",
	});
}

export default Component;
