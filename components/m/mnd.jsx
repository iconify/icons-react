import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a53go_wkz.css';
import '../../css/c/ck-pzhbhq.css';
import '../../css/c/c7gp0hbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a53go_wkz"/><path class="ck-pzhbhq"/><path class="c7gp0hbth"/>`,
		"fallback": "token:mnd",
	});
}

export default Component;
