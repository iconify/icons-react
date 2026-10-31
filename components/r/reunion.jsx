import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj1g41blw.css';
import '../../css/l/lw6oj00xq.css';
import '../../css/s/sqitbfasi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj1g41blw"/><path class="lw6oj00xq"/><path class="sqitbfasi"/>`,
		"fallback": "tabler-flags:reunion",
	});
}

export default Component;
