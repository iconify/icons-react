import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao23nccsy.css';
import '../../css/y/ye6llnqhf.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao23nccsy"/><path class="ye6llnqhf"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:upload-square-outline",
	});
}

export default Component;
