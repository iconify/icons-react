import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boagz7yoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="boagz7yoa"/>`,
		"fallback": "reicon:square-arrow-left-down-filled",
	});
}

export default Component;
