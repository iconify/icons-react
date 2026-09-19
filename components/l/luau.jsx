import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd-9drfax.css';
import '../../css/j/j3pesbbke.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd-9drfax"/><path class="j3pesbbke"/>`,
		"fallback": "catppuccin:luau",
	});
}

export default Component;
