import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hurmgkbeh.css';
import '../../css/n/nlg3gqb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hurmgkbeh"/><path class="nlg3gqb1d"/>`,
		"fallback": "streamline-freehand:smiley-eyes-only",
	});
}

export default Component;
