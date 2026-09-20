import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ucobmfu.css';
import '../../css/z/z6ggt6ojm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ucobmfu"/><path class="z6ggt6ojm"/>`,
		"fallback": "stash:pack",
	});
}

export default Component;
