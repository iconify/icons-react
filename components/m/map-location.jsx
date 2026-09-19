import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uryce_auj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uryce_auj"/>`,
		"fallback": "grommet-icons:map-location",
	});
}

export default Component;
