import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0nm-3j1m.css';
import '../../css/o/o4qm4qbec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="v0nm-3j1m"/><path class="o4qm4qbec"/>`,
		"fallback": "selfhst:wealthfolio",
	});
}

export default Component;
