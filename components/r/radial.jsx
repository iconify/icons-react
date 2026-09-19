import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phfw6ywkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="phfw6ywkj"/>`,
		"fallback": "grommet-icons:radial",
	});
}

export default Component;
