import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s2mcmntth.css';
import '../../css/f/fr9pebbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s2mcmntth"/><path class="fr9pebbba"/></g>`,
		"fallback": "streamline-freehand:lift-two-people-elevator",
	});
}

export default Component;
