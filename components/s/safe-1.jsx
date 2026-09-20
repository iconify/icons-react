import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/h/hp6e_pmvl.css';
import '../../css/l/l8-uzrbbi.css';
import '../../css/j/j4ujoubjx.css';
import '../../css/q/q_-r3hndv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="hp6e_pmvl"/><path class="l8-uzrbbi"/><path class="j4ujoubjx"/><path class="q_-r3hndv"/></g>`,
		"fallback": "streamline-cyber:safe-1",
	});
}

export default Component;
