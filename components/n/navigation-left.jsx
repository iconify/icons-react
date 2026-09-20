import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/y/ybmkikbnb.css';
import '../../css/t/tacxn8b_l.css';
import '../../css/i/ifaxhvbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="ybmkikbnb"/><path class="tacxn8b_l"/><path class="ifaxhvbuy"/></g>`,
		"fallback": "streamline-cyber-color:navigation-left",
	});
}

export default Component;
