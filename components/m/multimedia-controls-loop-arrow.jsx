import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b91wmnvdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b91wmnvdz"/>`,
		"fallback": "streamline-freehand-color:multimedia-controls-loop-arrow",
	});
}

export default Component;
