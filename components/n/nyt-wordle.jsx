import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1md_z23q.css';
import '../../css/l/lo6resb1g.css';
import '../../css/n/nncz9ebus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1md_z23q"/><path class="lo6resb1g"/><path class="nncz9ebus"/>`,
		"fallback": "selfhst:nyt-wordle",
	});
}

export default Component;
