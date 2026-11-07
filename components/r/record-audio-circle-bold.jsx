import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrtv4rb5l.css';
import '../../css/b/bidl9_apl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrtv4rb5l"/><path clip-rule="evenodd" class="bidl9_apl"/>`,
		"fallback": "solar:record-audio-circle-bold",
	});
}

export default Component;
