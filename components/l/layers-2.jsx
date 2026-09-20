import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3es_9_li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3es_9_li"/>`,
		"fallback": "reicon:layers-2",
	});
}

export default Component;
