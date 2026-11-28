import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyvcic_1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyvcic_1j"/>`,
		"fallback": "iconaut:log-out-solid",
	});
}

export default Component;
