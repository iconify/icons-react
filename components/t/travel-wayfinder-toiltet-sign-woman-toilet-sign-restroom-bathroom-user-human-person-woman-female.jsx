import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xwb44uomz.css';
import '../../css/p/p-tb2irnl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xwb44uomz"/><path class="p-tb2irnl"/></g>`,
		"fallback": "streamline:travel-wayfinder-toiltet-sign-woman-toilet-sign-restroom-bathroom-user-human-person-woman-female",
	});
}

export default Component;
