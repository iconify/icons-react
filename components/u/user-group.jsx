import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjxo99b9u.css';
import '../../css/d/dzyzyeb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjxo99b9u"/><path class="dzyzyeb7y"/>`,
		"fallback": "stash:user-group",
	});
}

export default Component;
