import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhd69yzkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhd69yzkx"/>`,
		"fallback": "thesvg-color:material-design-icons",
	});
}

export default Component;
