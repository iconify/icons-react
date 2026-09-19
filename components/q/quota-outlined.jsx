import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0r9-_bfd.css';
import '../../css/b/bc5_f4bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0r9-_bfd"/><path class="bc5_f4bbs"/>`,
		"fallback": "eos-icons:quota-outlined",
	});
}

export default Component;
