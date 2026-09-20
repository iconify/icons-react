import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmg7h7bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmg7h7bjw"/>`,
		"fallback": "streamline-sharp:phone-setting",
	});
}

export default Component;
