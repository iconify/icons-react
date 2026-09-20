import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzu7b86ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzu7b86ib"/>`,
		"fallback": "tabler:square-asterisk",
	});
}

export default Component;
