import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hojfkeldy.css';
import '../../css/b/bs8wnccip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hojfkeldy"/><path class="bs8wnccip"/></g>`,
		"fallback": "streamline-cyber:telecommunicator",
	});
}

export default Component;
