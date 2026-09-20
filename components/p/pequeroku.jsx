import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0jsy2bsu.css';
import '../../css/u/u8orx1b8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0jsy2bsu"/><path class="u8orx1b8y"/>`,
		"fallback": "selfhst:pequeroku",
	});
}

export default Component;
