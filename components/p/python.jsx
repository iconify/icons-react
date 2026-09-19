import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xvcmqooya.css';
import '../../css/z/z-zny5b2y.css';
import '../../css/a/a3u5zbbys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="xvcmqooya"/><path class="z-zny5b2y"/><path class="a3u5zbbys"/></g>`,
		"fallback": "catppuccin:python",
	});
}

export default Component;
