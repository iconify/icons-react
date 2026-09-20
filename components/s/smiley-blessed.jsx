import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e42jsrbou.css';
import '../../css/n/nv2zrkb9a.css';
import '../../css/v/v3ao27dlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e42jsrbou"/><path class="nv2zrkb9a"/><path class="v3ao27dlm"/>`,
		"fallback": "streamline-freehand:smiley-blessed",
	});
}

export default Component;
