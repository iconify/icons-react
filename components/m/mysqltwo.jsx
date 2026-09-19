import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ic7557j.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ic7557j"/>`,
		"fallback": "whh:mysqltwo",
	});
}

export default Component;
