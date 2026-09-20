import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udqjs3box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udqjs3box"/>`,
		"fallback": "lets-icons:stackframe-fill",
	});
}

export default Component;
