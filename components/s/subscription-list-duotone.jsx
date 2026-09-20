import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aghp232ji.css';
import '../../css/e/e7r0f6b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aghp232ji"/><path class="e7r0f6b8e"/></g>`,
		"fallback": "stash:subscription-list-duotone",
	});
}

export default Component;
