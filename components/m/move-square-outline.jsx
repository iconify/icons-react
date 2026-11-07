import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi46roinf.css';
import '../../css/o/otqf0kbur.css';
import '../../css/w/w3svapb9a.css';
import '../../css/t/tx0s273hs.css';
import '../../css/n/n8eavcbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi46roinf"/><path class="otqf0kbur"/><path class="w3svapb9a"/><path class="tx0s273hs"/><path clip-rule="evenodd" class="n8eavcbnu"/>`,
		"fallback": "solar:move-square-outline",
	});
}

export default Component;
