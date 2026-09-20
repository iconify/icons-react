import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc87u0btn.css';
import '../../css/f/fs_fwv3jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc87u0btn"/><path class="fs_fwv3jd"/>`,
		"fallback": "streamline-freehand:walkman-player",
	});
}

export default Component;
