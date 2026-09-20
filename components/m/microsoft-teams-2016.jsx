import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohtbhbbcu.css';
import '../../css/o/o598_n4he.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohtbhbbcu"/><path class="o598_n4he"/>`,
		"fallback": "selfhst:microsoft-teams-2016",
	});
}

export default Component;
