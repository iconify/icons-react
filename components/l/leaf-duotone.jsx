import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de1zgmdha.css';
import '../../css/j/jloulibzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de1zgmdha"/><path clip-rule="evenodd" class="jloulibzf"/>`,
		"fallback": "stash:leaf-duotone",
	});
}

export default Component;
