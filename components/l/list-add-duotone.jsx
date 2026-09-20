import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8cfgjbhe.css';
import '../../css/b/b6b-u_35t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8cfgjbhe"/><path class="b6b-u_35t"/>`,
		"fallback": "stash:list-add-duotone",
	});
}

export default Component;
