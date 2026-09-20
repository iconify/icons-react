import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drare1bjj.css';
import '../../css/z/zyog8pxnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drare1bjj"/><path clip-rule="evenodd" class="zyog8pxnu"/>`,
		"fallback": "stash:telegram",
	});
}

export default Component;
