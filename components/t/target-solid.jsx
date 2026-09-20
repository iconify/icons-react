import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0yw49byf.css';
import '../../css/u/u-9mz-bzz.css';
import '../../css/f/fydwzq94k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0yw49byf"/><path clip-rule="evenodd" class="u-9mz-bzz"/><path clip-rule="evenodd" class="fydwzq94k"/>`,
		"fallback": "teenyicons:target-solid",
	});
}

export default Component;
