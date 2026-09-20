import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uljtn5aar.css';
import '../../css/a/akh0cg09d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uljtn5aar"/><path clip-rule="evenodd" class="akh0cg09d"/>`,
		"fallback": "stash:reading-time-solid",
	});
}

export default Component;
