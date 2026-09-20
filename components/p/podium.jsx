import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ly36877qm.css';
import '../../css/t/tvuvbxsxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ly36877qm"/><path class="tvuvbxsxk"/></g>`,
		"fallback": "lucide:podium",
	});
}

export default Component;
