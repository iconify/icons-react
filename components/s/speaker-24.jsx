import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etkjk70xj.css';
import '../../css/z/zz7muabio.css';
import '../../css/y/yewcxcc-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="etkjk70xj"/><path class="zz7muabio"/><path class="yewcxcc-q"/>`,
		"fallback": "qlementine-icons:speaker-24",
	});
}

export default Component;
