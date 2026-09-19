import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/j/jo5t6_bbs.css';
import '../../css/p/purmy4bxs.css';
import '../../css/i/iwvnsxbma.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGefyMAczt" width="576" height="576" x="-32" y="-32" maskUnits="userSpaceOnUse"><circle class="bc1fd0lxe"/></mask></defs><g mask="url(#SVGefyMAczt)"><path class="wj-7246uw"/><path class="jo5t6_bbs"/><path class="purmy4bxs"/><path class="iwvnsxbma"/></g>`,
		"fallback": "circle-flags:lang-pms",
	});
}

export default Component;
