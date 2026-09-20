import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbm9vfskf.css';
import '../../css/t/tiuq2lb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbm9vfskf"/><path class="tiuq2lb1s"/>`,
		"fallback": "tdesign:mode-preview-filled",
	});
}

export default Component;
