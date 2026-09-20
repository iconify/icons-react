import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opg4asb0t.css';
import '../../css/l/lrijolbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opg4asb0t"/><path class="lrijolbnl"/>`,
		"fallback": "stash:user-clock-light",
	});
}

export default Component;
