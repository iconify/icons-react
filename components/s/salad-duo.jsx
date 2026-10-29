import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ls3i9tb5u.css';
import '../../css/r/r7u3_lblh.css';
import '../../css/f/f6-bjdasf.css';
import '../../css/m/mq76rl-uo.css';
import '../../css/u/u_zk5lblv.css';
import '../../css/u/ulmwtccii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ls3i9tb5u"/><path class="r7u3_lblh wm-a"/><path class="f6-bjdasf"/><path class="mq76rl-uo wm-a"/><path class="u_zk5lblv"/><path class="ulmwtccii wm-a"/></g>`,
		"fallback": "withicons:salad-duo",
	});
}

export default Component;
