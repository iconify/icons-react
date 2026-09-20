import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfaf48bnf.css';
import '../../css/i/ijft_pb8q.css';
import '../../css/e/es6zekb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfaf48bnf"/><path class="ijft_pb8q"/><path class="es6zekb_v"/></g>`,
		"fallback": "tdesign:measurement-2",
	});
}

export default Component;
