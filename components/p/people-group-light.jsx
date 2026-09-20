import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpa_lkb0t.css';
import '../../css/z/zdz2_wbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpa_lkb0t"/><path class="zdz2_wbky"/>`,
		"fallback": "stash:people-group-light",
	});
}

export default Component;
