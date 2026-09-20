import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkia-ebzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mkia-ebzu"/>`,
		"fallback": "streamline-sharp:user-arrows-account-switch-solid",
	});
}

export default Component;
