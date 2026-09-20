import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbh6muo5t.css';
import '../../css/h/h63eyhbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xbh6muo5t"/><path class="h63eyhbko"/></g>`,
		"fallback": "tabler:lock-code",
	});
}

export default Component;
