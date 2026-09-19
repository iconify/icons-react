import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-bbnvbzg.css';
import '../../css/m/mvcw08bgw.css';
import '../../css/a/akdbaebrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-bbnvbzg"/><path class="mvcw08bgw"/><path class="akdbaebrb"/>`,
		"fallback": "boxicons:layers-filled",
	});
}

export default Component;
