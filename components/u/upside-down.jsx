import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v11itpgom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dasv9vo5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v11itpgom"/><path class="bwibdw4bb"/><path class="dasv9vo5d"/>`,
		"fallback": "boxicons:upside-down",
	});
}

export default Component;
