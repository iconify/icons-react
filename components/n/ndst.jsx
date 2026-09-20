import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmyfq_blj.css';
import '../../css/a/a28a78bjh.css';
import '../../css/m/m2_srvnyi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmyfq_blj"/><path class="a28a78bjh"/><path class="m2_srvnyi"/>`,
		"fallback": "material-icon-theme:ndst",
	});
}

export default Component;
