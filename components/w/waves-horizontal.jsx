import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl840eg2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl840eg2o"/>`,
		"fallback": "vadivam:waves-horizontal",
	});
}

export default Component;
