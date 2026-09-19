import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxye1ut_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxye1ut_n"/>`,
		"fallback": "grommet-icons:stop-fill",
	});
}

export default Component;
