import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyn1bjb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyn1bjb6y"/>`,
		"fallback": "uit:toilet-paper",
	});
}

export default Component;
