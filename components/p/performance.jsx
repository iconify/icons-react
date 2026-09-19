import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbz0a5b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbz0a5b9f"/>`,
		"fallback": "grommet-icons:performance",
	});
}

export default Component;
