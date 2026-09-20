import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz9qcwbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz9qcwbro"/>`,
		"fallback": "streamline-sharp:surveillance-camera-remix",
	});
}

export default Component;
