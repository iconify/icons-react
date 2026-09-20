import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm2pr3awq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm2pr3awq"/>`,
		"fallback": "tabler:number-27-small",
	});
}

export default Component;
