import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nqzufeb8v.css';
import '../../css/a/avli89ttj.css';
import '../../css/j/jhqkx57ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nqzufeb8v"/><path class="avli89ttj"/><path class="jhqkx57ed"/></g>`,
		"fallback": "streamline-sharp-color:qr-code",
	});
}

export default Component;
