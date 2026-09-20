import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k18_m_dye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k18_m_dye"/>`,
		"fallback": "streamline-sharp:polaroid-remix",
	});
}

export default Component;
