import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feabg3bhd.css';
import '../../css/x/x4gpywx5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feabg3bhd"/><path class="x4gpywx5b"/>`,
		"fallback": "mage:trash-square-fill",
	});
}

export default Component;
