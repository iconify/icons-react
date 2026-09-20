import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qehc4-_kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qehc4-_kv"/>`,
		"fallback": "stash:list-add-light",
	});
}

export default Component;
