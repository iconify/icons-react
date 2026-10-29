import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i2qnw-bhf.css';
import '../../css/i/iayt--bmg.css';
import '../../css/v/vvd7iabnl.css';
import '../../css/x/xslfg2evh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i2qnw-bhf"/><path class="iayt--bmg"/><path class="vvd7iabnl wm-a"/><path class="wm-s xslfg2evh"/></g>`,
		"fallback": "withicons:lotus",
	});
}

export default Component;
