import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uryvlvbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uryvlvbch"/>`,
		"fallback": "vadivam:table-cells-merge",
	});
}

export default Component;
