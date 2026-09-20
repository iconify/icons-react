import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j71c0qbnb.css';
import '../../css/f/fzv9ipbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="j71c0qbnb"/><path class="fzv9ipbtk"/></g>`,
		"fallback": "keyline-icons:megaphone-sharp-two-tone",
	});
}

export default Component;
