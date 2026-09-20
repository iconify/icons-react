import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqp03tuhu.css';
import '../../css/h/htn9lvbbo.css';
import '../../css/f/fbzxk2bxi.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqp03tuhu"/><path class="htn9lvbbo"/><path class="fbzxk2bxi"/>`,
		"fallback": "iwwa:list-favourite",
	});
}

export default Component;
