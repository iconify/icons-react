import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/avo6d9b-a.css';
import '../../css/f/f0kdg9hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="avo6d9b-a"/><path class="f0kdg9hgq"/></g>`,
		"fallback": "humbleicons:volume-off",
	});
}

export default Component;
