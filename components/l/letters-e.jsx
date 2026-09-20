import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrd0ecotk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrd0ecotk"/>`,
		"fallback": "tdesign:letters-e",
	});
}

export default Component;
