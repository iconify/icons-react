import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyb0-gxmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyb0-gxmv"/>`,
		"fallback": "simple-icons:pokemon",
	});
}

export default Component;
