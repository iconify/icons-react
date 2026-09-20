import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr9_81qpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr9_81qpm"/>`,
		"fallback": "tabler:trees",
	});
}

export default Component;
