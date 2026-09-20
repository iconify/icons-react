import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl70btbxk.css';
import '../../css/a/ax074xbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl70btbxk"/><path class="ax074xbxc"/>`,
		"fallback": "stash:wand-duotone",
	});
}

export default Component;
