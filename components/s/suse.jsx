import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl72_acfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl72_acfo"/>`,
		"fallback": "grommet-icons:suse",
	});
}

export default Component;
