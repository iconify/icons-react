import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_p9czbut.css';
import '../../css/x/xnfkpachl.css';
import '../../css/f/fvspzabcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_p9czbut"/><path class="xnfkpachl"/><path class="fvspzabcn"/>`,
		"fallback": "solar:music-note-4-bold-duotone",
	});
}

export default Component;
