import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e28y29b_p.css';
import '../../css/k/k-kledcsx.css';
import '../../css/f/fyku39bza.css';
import '../../css/b/b0xttoqnt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e28y29b_p"/><path class="k-kledcsx"/><path class="fyku39bza"/><path class="b0xttoqnt"/>`,
		"fallback": "selfhst:microsoft-onenote-light",
	});
}

export default Component;
