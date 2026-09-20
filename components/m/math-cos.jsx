import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hucvy1bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hucvy1bcq"/>`,
		"fallback": "tabler:math-cos",
	});
}

export default Component;
