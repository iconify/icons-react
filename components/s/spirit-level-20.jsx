import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_lk_zxsl.css';
import '../../css/x/xjb0j7b-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_lk_zxsl"/><path class="xjb0j7b-v"/>`,
		"fallback": "energy-icons:spirit-level-20",
	});
}

export default Component;
