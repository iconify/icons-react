import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqkdk71em.css';
import '../../css/q/q_fcpqb1m.css';
import '../../css/c/cyq_l98zi.css';
import '../../css/f/fv-_47b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqkdk71em"/><path class="q_fcpqb1m"/><path class="cyq_l98zi"/><path class="fv-_47b6j"/>`,
		"fallback": "token:l2",
	});
}

export default Component;
