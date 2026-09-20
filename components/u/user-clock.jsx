import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4zjbgbjz.css';
import '../../css/i/i7fuergcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4zjbgbjz"/><path class="i7fuergcy"/>`,
		"fallback": "stash:user-clock",
	});
}

export default Component;
