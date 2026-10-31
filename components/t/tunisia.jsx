import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdftbpbaj.css';
import '../../css/w/wfcjrhbfv.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdftbpbaj"/><path class="wfcjrhbfv"/>`,
		"fallback": "tabler-flags:tunisia",
	});
}

export default Component;
