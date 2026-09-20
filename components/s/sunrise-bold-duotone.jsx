import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1psxwbwe.css';
import '../../css/d/de5deccyd.css';
import '../../css/d/d02dwsbfw.css';
import '../../css/w/wqpq22w0g.css';
import '../../css/c/cc15ccb6e.css';
import '../../css/z/z0ufk0bcm.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fs9xhv4yq.css';
import '../../css/z/z6hnwh2qw.css';
import '../../css/b/bgswpdbnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1psxwbwe"/><path class="de5deccyd"/><path class="d02dwsbfw"/><path class="wqpq22w0g"/><path class="cc15ccb6e"/><path class="z0ufk0bcm"/><g class="mc2zb0bvp"><path class="fs9xhv4yq"/><path class="z6hnwh2qw"/><path class="bgswpdbnx"/></g></g>`,
		"fallback": "solar:sunrise-bold-duotone",
	});
}

export default Component;
