import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfxgjk6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfxgjk6jc"/>`,
		"fallback": "streamline-ultimate:safety-float-bold",
	});
}

export default Component;
