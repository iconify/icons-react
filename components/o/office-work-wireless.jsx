import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxqopmb4d.css';
import '../../css/c/cudv7nb2y.css';
import '../../css/m/m4h84gd5d.css';
import '../../css/z/zhlglab2q.css';
import '../../css/r/rukfmib0i.css';
import '../../css/g/g1guytrys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pxqopmb4d"><path class="cudv7nb2y"/><path class="m4h84gd5d"/><path class="zhlglab2q"/><path class="rukfmib0i"/><path class="g1guytrys"/></g>`,
		"fallback": "streamline-ultimate-color:office-work-wireless",
	});
}

export default Component;
