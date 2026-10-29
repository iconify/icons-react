import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx0wvsd8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx0wvsd8v"/>`,
		"fallback": "withicons:locate-fixed-solid",
	});
}

export default Component;
