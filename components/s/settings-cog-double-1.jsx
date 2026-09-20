import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qovy5h5jb.css';
import '../../css/j/j_yt1hbdr.css';
import '../../css/t/t7x09zibz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qovy5h5jb"/><path class="j_yt1hbdr"/><path class="t7x09zibz"/>`,
		"fallback": "streamline-freehand:settings-cog-double-1",
	});
}

export default Component;
