import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrpz53bmr.css';
import '../../css/g/gepwz6jff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrpz53bmr"/><path class="gepwz6jff"/>`,
		"fallback": "streamline-ultimate:tea-pot-bold",
	});
}

export default Component;
