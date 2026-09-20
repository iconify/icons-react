import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pplbo7oar.css';
import '../../css/c/c8aj1-b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pplbo7oar"/><path class="c8aj1-b3y"/>`,
		"fallback": "stash:sensitive-light",
	});
}

export default Component;
