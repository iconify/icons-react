import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/waihcp8bs.css';
import '../../css/p/p9lrksbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="waihcp8bs"/><path class="p9lrksbpx"/></g>`,
		"fallback": "grommet-icons:reactjs",
	});
}

export default Component;
