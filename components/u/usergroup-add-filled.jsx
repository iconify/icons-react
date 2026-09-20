import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k54_jgbmz.css';
import '../../css/w/wwzneb9rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k54_jgbmz"/><path class="wwzneb9rp"/>`,
		"fallback": "tdesign:usergroup-add-filled",
	});
}

export default Component;
