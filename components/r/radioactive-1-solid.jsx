import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwhhmvbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lwhhmvbsl"/>`,
		"fallback": "streamline-sharp:radioactive-1-solid",
	});
}

export default Component;
