import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9qkg1brs.css';
import '../../css/u/ut2c2s13u.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qzk5zubqx.css';
import '../../css/f/fujosbckp.css';
import '../../css/k/k_arrub8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9qkg1brs"/><path clip-rule="evenodd" class="ut2c2s13u"/><g class="xtpeb-edw"><path class="qzk5zubqx"/><path class="fujosbckp"/><path class="k_arrub8k"/></g>`,
		"fallback": "solar:tornado-bold-duotone",
	});
}

export default Component;
