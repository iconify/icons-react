import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvxll9bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvxll9bne"/>`,
		"fallback": "noviair:store-x",
	});
}

export default Component;
