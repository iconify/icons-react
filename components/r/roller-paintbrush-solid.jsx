import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6es5gb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k6es5gb0e"/>`,
		"fallback": "streamline-sharp:roller-paintbrush-solid",
	});
}

export default Component;
