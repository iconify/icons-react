import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l3s_kac2u.css';
import '../../css/v/vyoqtroix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l3s_kac2u"/><path class="vyoqtroix"/></g>`,
		"fallback": "streamline-ultimate:microsoft-onedrive-logo-2",
	});
}

export default Component;
