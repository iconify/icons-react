import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8zu5fzsk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8zu5fzsk"/>`,
		"fallback": "entypo-social:vimeo-with-circle",
	});
}

export default Component;
