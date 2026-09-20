import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nii0p1blk.css';
import '../../css/h/h631kg9bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nii0p1blk"/><circle class="h631kg9bu"/>`,
		"fallback": "lets-icons:status",
	});
}

export default Component;
