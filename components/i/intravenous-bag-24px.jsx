import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp9zlby6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vp9zlby6e"/>`,
		"fallback": "healthicons:intravenous-bag-24px",
	});
}

export default Component;
