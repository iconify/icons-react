import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zocpa-b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zocpa-b9a"/>`,
		"fallback": "tabler:number-66-small",
	});
}

export default Component;
