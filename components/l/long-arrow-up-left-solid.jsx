import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/u/u8o29tb_n.css';
import '../../css/z/zlg7w8ncq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="u8o29tb_n"/><path class="zlg7w8ncq"/></g>`,
		"fallback": "iconoir:long-arrow-up-left-solid",
	});
}

export default Component;
