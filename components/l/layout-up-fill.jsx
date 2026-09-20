import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncm8dqb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncm8dqb5y"/>`,
		"fallback": "mage:layout-up-fill",
	});
}

export default Component;
