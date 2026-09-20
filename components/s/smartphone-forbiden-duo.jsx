import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxflyccvw.css';
import '../../css/y/yaaczubzy.css';
import '../../css/l/lqz83fb4r.css';
import '../../css/f/fylw3m9-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxflyccvw"/><path class="yaaczubzy"/><path class="lqz83fb4r"/><path class="fylw3m9-l"/></g>`,
		"fallback": "streamline-kameleon-color:smartphone-forbiden-duo",
	});
}

export default Component;
