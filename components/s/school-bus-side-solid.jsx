import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4mz7cb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4mz7cb-t"/>`,
		"fallback": "streamline-sharp:school-bus-side-solid",
	});
}

export default Component;
