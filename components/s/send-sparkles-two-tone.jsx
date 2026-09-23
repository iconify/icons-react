import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-kaefbbs.css';
import '../../css/g/gacmsohwz.css';
import '../../css/g/glumznb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l-kaefbbs"/><path class="gacmsohwz"/><path class="glumznb3o"/></g>`,
		"fallback": "keyline-icons:send-sparkles-two-tone",
	});
}

export default Component;
