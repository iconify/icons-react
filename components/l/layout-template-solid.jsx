import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g2gr7ib4p.css';
import '../../css/s/s2cv2qbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g2gr7ib4p"/><path class="s2cv2qbsx wm-a"/></g>`,
		"fallback": "withicons:layout-template-solid",
	});
}

export default Component;
