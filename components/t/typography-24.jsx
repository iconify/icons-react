import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot7u5ufdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot7u5ufdy"/>`,
		"fallback": "octicon:typography-24",
	});
}

export default Component;
