import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jaazugmyj.css';
import '../../css/x/xrdm9cbye.css';
import '../../css/b/ba-wvclal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jaazugmyj"/><path class="xrdm9cbye"/><path class="ba-wvclal"/></g>`,
		"fallback": "streamline-cyber-color:shopping-basket-3",
	});
}

export default Component;
