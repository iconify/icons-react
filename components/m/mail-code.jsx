import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e26ul7b2m.css';
import '../../css/i/inwrbwapo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e26ul7b2m"/><path class="inwrbwapo"/></g>`,
		"fallback": "tabler:mail-code",
	});
}

export default Component;
