import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvs2mmb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvs2mmb0n"/>`,
		"fallback": "vadivam:navigation",
	});
}

export default Component;
