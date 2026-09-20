import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck1zpvp7z.css';
import '../../css/g/gv5ppo3az.css';
import '../../css/u/u4zjxwbyw.css';
import '../../css/h/hxq4vobqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck1zpvp7z"/><path class="gv5ppo3az"/><path class="u4zjxwbyw"/><path class="hxq4vobqf"/>`,
		"fallback": "token:paid",
	});
}

export default Component;
