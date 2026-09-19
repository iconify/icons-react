import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1qq278_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1qq278_y"/>`,
		"fallback": "game-icons:rub-el-hizb",
	});
}

export default Component;
