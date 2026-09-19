import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhpgzke8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhpgzke8t"/>`,
		"fallback": "grommet-icons:three-d-effects",
	});
}

export default Component;
