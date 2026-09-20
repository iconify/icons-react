import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plcuanbng.css';
import '../../css/j/jx0lkpbqx.css';
import '../../css/a/a4nu-p1co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plcuanbng"/><path class="jx0lkpbqx"/><path class="a4nu-p1co"/>`,
		"fallback": "streamline-ultimate:phone-retro-1-bold",
	});
}

export default Component;
