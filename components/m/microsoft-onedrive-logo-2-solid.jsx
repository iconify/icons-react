import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl3t-8q6w.css';
import '../../css/m/m6ntpracs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl3t-8q6w"/><path clip-rule="evenodd" class="m6ntpracs"/>`,
		"fallback": "streamline-logos:microsoft-onedrive-logo-2-solid",
	});
}

export default Component;
