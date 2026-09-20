import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajodv2bql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ajodv2bql"/>`,
		"fallback": "ix:jigsaw-filled",
	});
}

export default Component;
