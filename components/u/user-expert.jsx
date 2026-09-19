import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chuc7emeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chuc7emeo"/>`,
		"fallback": "grommet-icons:user-expert",
	});
}

export default Component;
