import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/py7ktqbvf.css';
import '../../css/c/cardt04wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="py7ktqbvf"/><path class="cardt04wx"/></g>`,
		"fallback": "iconoir:snapchat",
	});
}

export default Component;
