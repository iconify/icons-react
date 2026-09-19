import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maf_-rbzb.css';
import '../../css/k/keeeh295c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maf_-rbzb"/><path class="keeeh295c"/>`,
		"fallback": "bxs:paint-roll",
	});
}

export default Component;
