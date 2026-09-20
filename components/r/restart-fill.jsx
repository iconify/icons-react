import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw_83wk5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw_83wk5f"/>`,
		"fallback": "ri:restart-fill",
	});
}

export default Component;
