import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ap-wpqeyt.css';
import '../../css/d/dl8vi153m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ap-wpqeyt"/><path class="dl8vi153m"/></g>`,
		"fallback": "lucide-lab:pig-head",
	});
}

export default Component;
