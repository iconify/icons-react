import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgujrohyl.css';
import '../../css/b/b07penbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgujrohyl"/><path class="b07penbop"/>`,
		"fallback": "pixel:technology",
	});
}

export default Component;
