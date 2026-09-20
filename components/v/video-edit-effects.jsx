import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fmjpsxhlw.css';
import '../../css/i/iems2jb5l.css';
import '../../css/x/x_-nuj_3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fmjpsxhlw"/><path class="iems2jb5l"/><path class="x_-nuj_3o"/></g>`,
		"fallback": "streamline-freehand:video-edit-effects",
	});
}

export default Component;
