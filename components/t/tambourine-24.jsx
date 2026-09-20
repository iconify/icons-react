import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojxt9lbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojxt9lbqa"/>`,
		"fallback": "qlementine-icons:tambourine-24",
	});
}

export default Component;
