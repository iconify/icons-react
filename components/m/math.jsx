import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rru8phcei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rru8phcei"/>`,
		"fallback": "tabler:math",
	});
}

export default Component;
