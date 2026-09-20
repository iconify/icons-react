import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fus1u3bvc.css';
import '../../css/m/m-g2ynbrd.css';
import '../../css/t/tvdh9jgjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fus1u3bvc"/><path class="m-g2ynbrd"/><path class="tvdh9jgjx"/>`,
		"fallback": "selfhst:ksuite-manager",
	});
}

export default Component;
