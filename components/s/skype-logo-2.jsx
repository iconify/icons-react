import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n1wqhzbab.css';
import '../../css/o/oy9aotbsd.css';
import '../../css/s/so88wuvrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="n1wqhzbab"/><path class="oy9aotbsd"/><path class="so88wuvrp"/></g>`,
		"fallback": "streamline-logos:skype-logo-2",
	});
}

export default Component;
