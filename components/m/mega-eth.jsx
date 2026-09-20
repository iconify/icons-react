import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwzpwfbbu.css';
import '../../css/r/ri95jlkhc.css';
import '../../css/a/avb8i1b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwzpwfbbu"/><path clip-rule="evenodd" class="ri95jlkhc"/><path class="avb8i1b-g"/>`,
		"fallback": "token:mega-eth",
	});
}

export default Component;
