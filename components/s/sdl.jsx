import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4zoy01sj.css';
import '../../css/w/whgmfl94s.css';
import '../../css/d/d01_w0vgw.css';
import '../../css/d/dhxolmyqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4zoy01sj"/><path class="whgmfl94s"/><path class="d01_w0vgw"/><path class="dhxolmyqn"/>`,
		"fallback": "token:sdl",
	});
}

export default Component;
