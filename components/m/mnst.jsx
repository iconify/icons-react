import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdvkxgexj.css';
import '../../css/l/lez75epbo.css';
import '../../css/c/c1cb-s12j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdvkxgexj"/><path class="lez75epbo"/><path class="c1cb-s12j"/>`,
		"fallback": "token:mnst",
	});
}

export default Component;
