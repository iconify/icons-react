import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ag_tbfbdv.css';
import '../../css/i/is0khq3wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ag_tbfbdv"/><path class="is0khq3wi"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-blutooth",
	});
}

export default Component;
