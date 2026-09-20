import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bifbx49_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bifbx49_g"/>`,
		"fallback": "thesvg:lambda",
	});
}

export default Component;
