import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye7medc9d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ye7medc9d"/>`,
		"fallback": "streamline:prescription-pills-drugs-healthcare-remix",
	});
}

export default Component;
