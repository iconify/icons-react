import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/outf-abwk.css';
import '../../css/g/gd4eslbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="outf-abwk"/><path class="gd4eslbof"/>`,
		"fallback": "stash:mailbox-empty-light",
	});
}

export default Component;
