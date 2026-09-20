import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4l_v6abs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4l_v6abs"/>`,
		"fallback": "streamline-sharp:necktie-remix",
	});
}

export default Component;
