import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rotxfmb0f.css';
import '../../css/e/ekbk75bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rotxfmb0f"/><path class="ekbk75bau"/>`,
		"fallback": "bitcoin-icons:power-filled",
	});
}

export default Component;
