import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c577txckh.css';
import '../../css/h/h8a4kwb9b.css';
import '../../css/o/okbzh_b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c577txckh"/><path class="h8a4kwb9b"/><path class="okbzh_b6y"/>`,
		"fallback": "uim:process",
	});
}

export default Component;
