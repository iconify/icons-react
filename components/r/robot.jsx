import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcma0ibea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcma0ibea"/>`,
		"fallback": "grommet-icons:robot",
	});
}

export default Component;
