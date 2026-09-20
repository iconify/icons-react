import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rifrj-b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rifrj-b7a"/>`,
		"fallback": "tabler:rectangle-rounded-bottom",
	});
}

export default Component;
