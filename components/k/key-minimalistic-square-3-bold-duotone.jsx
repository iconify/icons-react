import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/gsvy13bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path clip-rule="evenodd" class="gsvy13bxq"/>`,
		"fallback": "solar:key-minimalistic-square-3-bold-duotone",
	});
}

export default Component;
