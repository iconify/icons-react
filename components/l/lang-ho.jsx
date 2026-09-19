import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u0h-mhb8u.css';
import '../../css/t/tcqwic74d.css';
import '../../css/a/avztdeb9x.css';
import '../../css/u/uc45-h4xp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="u0h-mhb8u"/><path class="tcqwic74d"/><path class="avztdeb9x"/><path class="uc45-h4xp"/></g>`,
		"fallback": "circle-flags:lang-ho",
	});
}

export default Component;
