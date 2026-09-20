import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkpfuf8df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkpfuf8df"/>`,
		"fallback": "thesvg-color:mautic",
	});
}

export default Component;
