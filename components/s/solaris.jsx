import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b__w9xbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b__w9xbtd"/>`,
		"fallback": "grommet-icons:solaris",
	});
}

export default Component;
