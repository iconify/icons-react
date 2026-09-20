import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zfdr3yxhp.css';
import '../../css/g/ghya2pbow.css';
import '../../css/h/hhc96f81o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zfdr3yxhp"/><circle class="ghya2pbow"/><rect class="hhc96f81o"/></g>`,
		"fallback": "lucide:user-lock",
	});
}

export default Component;
