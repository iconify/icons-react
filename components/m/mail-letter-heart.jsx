import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7dh059pd.css';
import '../../css/g/glfxmynsd.css';
import '../../css/z/ztstzibly.css';
import '../../css/r/rax1kob-n.css';
import '../../css/i/iqrmk5p8o.css';
import '../../css/y/yuqebibhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v7dh059pd"/><path class="glfxmynsd"/><path class="ztstzibly"/><path class="rax1kob-n"/><path class="iqrmk5p8o"/><path class="yuqebibhf"/></g>`,
		"fallback": "andrsrxn:mail-letter-heart",
	});
}

export default Component;
