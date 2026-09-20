import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euvxs1b3r.css';
import '../../css/e/ej65opbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euvxs1b3r"/><path class="ej65opbwx"/>`,
		"fallback": "streamline-ultimate:medical-app-laptop-1-bold",
	});
}

export default Component;
