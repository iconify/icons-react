import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fr31nyphc.css';
import '../../css/q/qev--gu9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fr31nyphc"/><path class="qev--gu9q"/></g>`,
		"fallback": "tabler:olympics",
	});
}

export default Component;
