import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ec2szhbtj.css';
import '../../css/p/p_eb1bc0z.css';
import '../../css/k/kzf3w32zp.css';
import '../../css/v/v2t06_eti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ec2szhbtj wm-shadow"/><path class="p_eb1bc0z wm-shadow"/><path class="kzf3w32zp"/><path class="v2t06_eti"/></g>`,
		"fallback": "withicons-brutal:list-filter",
	});
}

export default Component;
