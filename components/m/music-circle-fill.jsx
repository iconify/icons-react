import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk4qgdbux.css';
import '../../css/t/tevsa0mrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk4qgdbux"/><path class="tevsa0mrw"/>`,
		"fallback": "mage:music-circle-fill",
	});
}

export default Component;
