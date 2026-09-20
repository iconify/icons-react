import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/vnd-gybxd.css';
import '../../css/v/vlq-7z25d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="vnd-gybxd"/><path class="vlq-7z25d"/></g>`,
		"fallback": "lets-icons:roll-light-light",
	});
}

export default Component;
