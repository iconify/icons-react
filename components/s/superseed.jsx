import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_mawq86p.css';
import '../../css/j/j4yj9ly8b.css';
import '../../css/u/u03tgvbmi.css';
import '../../css/d/dmpvkt-we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_mawq86p"/><path class="j4yj9ly8b"/><path class="u03tgvbmi"/><path clip-rule="evenodd" class="dmpvkt-we"/>`,
		"fallback": "token:superseed",
	});
}

export default Component;
