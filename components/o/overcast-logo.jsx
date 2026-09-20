import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/h/haas54bew.css';
import '../../css/o/oo0y67czy.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="haas54bew"/><path class="oo0y67czy"/><path class="j697l3uzc"/></g>`,
		"fallback": "streamline-logos:overcast-logo",
	});
}

export default Component;
