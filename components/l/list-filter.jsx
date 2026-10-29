import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol_y8tkuq.css';
import '../../css/e/eorjg-5_x.css';
import '../../css/e/ectew4bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol_y8tkuq wm-shadow"/><path class="eorjg-5_x wm-k"/><path class="ectew4bwb wm-k"/>`,
		"fallback": "withicons-pastel:list-filter",
	});
}

export default Component;
