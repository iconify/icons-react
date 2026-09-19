import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebbz1ybvf.css';

const viewBox = {"width":433,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebbz1ybvf"/>`,
		"fallback": "file-icons:rubocop",
	});
}

export default Component;
