import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwlh7mskr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwlh7mskr"/>`,
		"fallback": "bxl:medium-old",
	});
}

export default Component;
