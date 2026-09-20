import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evn_o6jvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evn_o6jvt"/>`,
		"fallback": "tabler:row-remove",
	});
}

export default Component;
