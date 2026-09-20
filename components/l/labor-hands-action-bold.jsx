import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emu7ok8id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emu7ok8id"/>`,
		"fallback": "streamline-ultimate:labor-hands-action-bold",
	});
}

export default Component;
