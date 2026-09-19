import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzfg9e1eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzfg9e1eo"/>`,
		"fallback": "grommet-icons:save",
	});
}

export default Component;
