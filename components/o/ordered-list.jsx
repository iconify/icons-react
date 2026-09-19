import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3m3rbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm3m3rbar"/>`,
		"fallback": "grommet-icons:ordered-list",
	});
}

export default Component;
