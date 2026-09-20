import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs7942tbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs7942tbi"/>`,
		"fallback": "uil:lamp",
	});
}

export default Component;
