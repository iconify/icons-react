import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjlbo5axu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjlbo5axu"/>`,
		"fallback": "thesvg:modin",
	});
}

export default Component;
