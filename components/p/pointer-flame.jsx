import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qed2t9bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qed2t9bdv"/>`,
		"fallback": "tabler:pointer-flame",
	});
}

export default Component;
