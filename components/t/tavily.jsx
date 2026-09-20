import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7x-tfbpm.css';
import '../../css/o/o_3vlpb9b.css';
import '../../css/p/pfd8kr3ea.css';
import '../../css/b/blteqxbjb.css';
import '../../css/w/wcnbrab-i.css';
import '../../css/i/i63qj7bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7x-tfbpm"/><path class="o_3vlpb9b"/><path class="pfd8kr3ea"/><path class="blteqxbjb"/><path class="wcnbrab-i"/><path class="i63qj7bzf"/>`,
		"fallback": "thesvg-color:tavily",
	});
}

export default Component;
