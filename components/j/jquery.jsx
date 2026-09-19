import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs4ejwyhj.css';
import '../../css/f/fa6uf3bbr.css';
import '../../css/h/haqwlo80j.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs4ejwyhj"/><path class="fa6uf3bbr"/><path class="haqwlo80j"/>`,
		"fallback": "fontisto:jquery",
	});
}

export default Component;
