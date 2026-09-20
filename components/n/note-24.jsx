import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cle0u0bwz.css';
import '../../css/e/e1s56dbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cle0u0bwz"/><path class="e1s56dbln"/>`,
		"fallback": "octicon:note-24",
	});
}

export default Component;
