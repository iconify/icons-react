import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfyl5d5vt.css';
import '../../css/c/c0mbupb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfyl5d5vt"/><path class="c0mbupb-p"/>`,
		"fallback": "stash:screw-nut-duotone",
	});
}

export default Component;
