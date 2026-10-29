import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wyaegoxip.css';
import '../../css/h/hr3iaebza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wyaegoxip"/><path class="hr3iaebza wm-a"/></g>`,
		"fallback": "withicons:potted-plant-solid",
	});
}

export default Component;
