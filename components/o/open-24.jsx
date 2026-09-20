import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuhx5e6fl.css';
import '../../css/o/orbbcu1_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuhx5e6fl"/><path clip-rule="evenodd" class="orbbcu1_z"/>`,
		"fallback": "qlementine-icons:open-24",
	});
}

export default Component;
