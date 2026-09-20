import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2an1vf6x.css';
import '../../css/k/k82zah-zg.css';
import '../../css/n/nnnq0zm1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2an1vf6x"/><path class="k82zah-zg"/><path class="nnnq0zm1c"/>`,
		"fallback": "token:loc",
	});
}

export default Component;
