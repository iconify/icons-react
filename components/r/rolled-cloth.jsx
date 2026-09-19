import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u59ysr_vi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u59ysr_vi"/>`,
		"fallback": "game-icons:rolled-cloth",
	});
}

export default Component;
