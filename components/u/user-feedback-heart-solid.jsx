import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_p24o3jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z_p24o3jy"/>`,
		"fallback": "streamline-sharp:user-feedback-heart-solid",
	});
}

export default Component;
