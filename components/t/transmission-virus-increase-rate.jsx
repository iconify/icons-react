import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o804cb_ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o804cb_ex"/>`,
		"fallback": "covid:transmission-virus-increase-rate",
	});
}

export default Component;
