import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba9x64_qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba9x64_qo"/>`,
		"fallback": "prime:user",
	});
}

export default Component;
