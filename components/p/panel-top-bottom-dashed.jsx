import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v06u48b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v06u48b8t"/>`,
		"fallback": "vadivam:panel-top-bottom-dashed",
	});
}

export default Component;
