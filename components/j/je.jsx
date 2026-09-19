import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/yjj0ifbsc.css';
import '../../css/o/on8g54jyb.css';
import '../../css/z/z9pplacng.css';
import '../../css/e/ed-ld3b8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="yjj0ifbsc"/><path class="on8g54jyb"/><path class="z9pplacng"/><path class="ed-ld3b8q"/></g>`,
		"fallback": "circle-flags:je",
	});
}

export default Component;
