import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a8p2gebsn.css';
import '../../css/g/gcfp9hhah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="a8p2gebsn"/><path class="gcfp9hhah"/></g>`,
		"fallback": "catppuccin:netlify",
	});
}

export default Component;
