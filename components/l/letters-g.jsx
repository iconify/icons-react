import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0iha821l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0iha821l"/>`,
		"fallback": "tdesign:letters-g",
	});
}

export default Component;
