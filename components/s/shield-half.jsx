import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jbsj7qldv.css';
import '../../css/x/xj_7x3bof.css';
import '../../css/v/vfh7br68s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jbsj7qldv"/><path class="xj_7x3bof"/><path class="vfh7br68s"/></g>`,
		"fallback": "withicons-bauhaus:shield-half",
	});
}

export default Component;
