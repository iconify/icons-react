import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/banhr5xsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="banhr5xsr"/>`,
		"fallback": "streamline-sharp:pinwheel-solid",
	});
}

export default Component;
