import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhh-lmb1b.css';
import '../../css/s/s1xezt9uh.css';
import '../../css/r/ru5wvccub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhh-lmb1b"/><path class="s1xezt9uh"/><path clip-rule="evenodd" class="ru5wvccub"/>`,
		"fallback": "solar:minimize-square-3-outline",
	});
}

export default Component;
