import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m903izb2c.css';
import '../../css/a/agkkf9bgs.css';
import '../../css/h/huqxzg8tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m903izb2c wm-a"/><path class="agkkf9bgs wm-k"/><path class="huqxzg8tr wm-k"/>`,
		"fallback": "withicons-bauhaus:plug",
	});
}

export default Component;
