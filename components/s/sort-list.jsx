import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/i/iuc18tbpb.css';
import '../../css/l/lkr83rggl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="iuc18tbpb"/><path class="lkr83rggl"/></g>`,
		"fallback": "lets-icons:sort-list",
	});
}

export default Component;
