import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6u5tubte.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6u5tubte"/>`,
		"fallback": "streamline-plump:user-switch-account-solid",
	});
}

export default Component;
