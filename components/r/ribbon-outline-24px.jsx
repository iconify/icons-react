import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1x937zvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1x937zvv"/>`,
		"fallback": "healthicons:ribbon-outline-24px",
	});
}

export default Component;
