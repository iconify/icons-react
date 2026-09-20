import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipk4zab3u.css';
import '../../css/b/bgvnsfk4m.css';
import '../../css/s/s-2_26b5l.css';

const viewBox = {"width":65,"height":65,"left":148,"top":164};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipk4zab3u"/><path class="bgvnsfk4m"/><path class="s-2_26b5l"/>`,
		"fallback": "thesvg-color:session-buddy",
	});
}

export default Component;
