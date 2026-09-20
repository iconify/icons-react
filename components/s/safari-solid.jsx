import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfw4d2b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfw4d2b8p"/>`,
		"fallback": "streamline-sharp:safari-solid",
	});
}

export default Component;
