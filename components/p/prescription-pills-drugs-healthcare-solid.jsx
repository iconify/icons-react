import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4cpwgb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w4cpwgb3p"/>`,
		"fallback": "streamline-sharp:prescription-pills-drugs-healthcare-solid",
	});
}

export default Component;
