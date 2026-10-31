import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/y/ynlqkpb9g.css';
import '../../css/q/qcrlvcbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="ynlqkpb9g"/><path class="qcrlvcbzu"/></g>`,
		"fallback": "streamline-kameleon-color:oven-glove-pop",
	});
}

export default Component;
