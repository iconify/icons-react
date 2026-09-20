import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y2uef-b8t.css';
import '../../css/c/ci-4_8bhe.css';
import '../../css/v/vxx69tbmh.css';
import '../../css/i/iuasgch0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="y2uef-b8t"/><path class="ci-4_8bhe"/><circle class="vxx69tbmh"/><path class="iuasgch0e"/></g>`,
		"fallback": "streamline:travel-wayfinder-toilet-sign-man-woman-toilet-sign-restroom-bathroom-user-human-person",
	});
}

export default Component;
