import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etc7_tbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etc7_tbwj"/>`,
		"fallback": "tabler:topology-complex",
	});
}

export default Component;
