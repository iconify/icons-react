import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3k57tbsl.css';
import '../../css/v/v9uc2q8gc.css';
import '../../css/o/olgj5xbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h3k57tbsl"/><path class="v9uc2q8gc wm-a"/><path class="olgj5xbvl"/></g>`,
		"fallback": "withicons:search-duo",
	});
}

export default Component;
