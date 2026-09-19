import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl3is9b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl3is9b9f"/>`,
		"fallback": "grommet-icons:search-advanced",
	});
}

export default Component;
