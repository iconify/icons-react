import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrk2ewb9i.css';
import '../../css/y/y4k_89boh.css';
import '../../css/p/puc0_5gte.css';
import '../../css/u/u04za1bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrk2ewb9i"/><path clip-rule="evenodd" class="y4k_89boh"/><path clip-rule="evenodd" class="puc0_5gte"/><path class="u04za1bxy"/>`,
		"fallback": "stash:reading-time",
	});
}

export default Component;
