import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-i_qcb0v.css';
import '../../css/h/ha04bdb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-i_qcb0v"/><path clip-rule="evenodd" class="ha04bdb-f"/>`,
		"fallback": "token:kasta",
	});
}

export default Component;
