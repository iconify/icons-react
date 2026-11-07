import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3uje9bbo.css';
import '../../css/v/v1qydc12m.css';
import '../../css/e/er-a0qb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3uje9bbo"/><path class="v1qydc12m"/><path class="er-a0qb3w"/>`,
		"fallback": "solar:key-minimalistic-bold-duotone",
	});
}

export default Component;
