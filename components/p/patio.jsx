import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h43whc_ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h43whc_ds"/>`,
		"fallback": "guidance:patio",
	});
}

export default Component;
