import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jabs6t4yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jabs6t4yi"/>`,
		"fallback": "cbi:moes-4way",
	});
}

export default Component;
