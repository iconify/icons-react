import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvmue5hsj.css';
import '../../css/b/b8f7uhb9w.css';
import '../../css/j/jj-f21boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvmue5hsj"/><path class="b8f7uhb9w"/><path class="jj-f21boy"/></g>`,
		"fallback": "streamline-cyber-color:phone-5",
	});
}

export default Component;
