import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jytnoj_6w.css';
import '../../css/y/yeai0_c-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jytnoj_6w"/><path class="yeai0_c-p"/>`,
		"fallback": "mage:volume-up-fill",
	});
}

export default Component;
