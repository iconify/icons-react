import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkuzq1bau.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkuzq1bau"/>`,
		"fallback": "heroicons-solid:squares-2x2",
	});
}

export default Component;
