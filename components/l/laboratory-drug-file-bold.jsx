import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhtvc5bfh.css';
import '../../css/w/wkehg6b9s.css';
import '../../css/v/vi7gv51nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhtvc5bfh"/><path class="wkehg6b9s"/><path class="vi7gv51nc"/>`,
		"fallback": "streamline-ultimate:laboratory-drug-file-bold",
	});
}

export default Component;
