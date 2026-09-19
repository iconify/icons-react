import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaa_3geeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaa_3geeh"/>`,
		"fallback": "grommet-icons:meta",
	});
}

export default Component;
