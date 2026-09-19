import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcut38x1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcut38x1v"/>`,
		"fallback": "grommet-icons:unlink",
	});
}

export default Component;
