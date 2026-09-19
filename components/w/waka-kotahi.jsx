import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya5a489_p.css';
import '../../css/m/md0kk7b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya5a489_p"/><path class="md0kk7b9x"/>`,
		"fallback": "cbi:waka-kotahi",
	});
}

export default Component;
