import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/em4p7ebsc.css';
import '../../css/g/gvvqoiecn.css';
import '../../css/m/m96qynxnf.css';
import '../../css/x/xta0e3bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="em4p7ebsc wm-k"/><path class="gvvqoiecn wm-a"/><path class="m96qynxnf"/><path class="xta0e3bxu"/></g>`,
		"fallback": "withicons-bauhaus:popcorn",
	});
}

export default Component;
