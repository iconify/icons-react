import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbtf-g2sk.css';
import '../../css/f/fz2yxm-re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mbtf-g2sk"/><path class="fz2yxm-re"/></g>`,
		"fallback": "andrsrxn:square-brackets-ellipsis-right",
	});
}

export default Component;
