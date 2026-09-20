import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e35zetb5p.css';
import '../../css/m/mqbc9tg1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e35zetb5p"/><path class="mqbc9tg1u"/></g>`,
		"fallback": "lucide:megaphone-off",
	});
}

export default Component;
