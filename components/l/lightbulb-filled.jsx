import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/j/j4hg7b.css';
import '../../css/a/ajozcb.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew j4hg7b"/><path class="ajozcb iw1iew"/>`,
		"fallback": "line-md:lightbulb-filled",
	});
}

export default Component;
