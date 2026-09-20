import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moai_zk6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="moai_zk6z"/>`,
		"fallback": "streamline-logos:uplabs-logo-solid",
	});
}

export default Component;
