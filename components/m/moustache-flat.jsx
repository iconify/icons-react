import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkvx44x9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkvx44x9x"/>`,
		"fallback": "streamline-sharp-color:moustache-flat",
	});
}

export default Component;
