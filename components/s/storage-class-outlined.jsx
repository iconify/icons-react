import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1y0covbn.css';
import '../../css/i/i_z5csbpk.css';
import '../../css/f/f3not4nii.css';
import '../../css/p/pv9i0lw2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1y0covbn"/><path class="i_z5csbpk"/><path class="f3not4nii"/><path class="pv9i0lw2r"/>`,
		"fallback": "eos-icons:storage-class-outlined",
	});
}

export default Component;
