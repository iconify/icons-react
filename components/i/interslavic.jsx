import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r1fqibbtg.css';
import '../../css/i/i1vplkssi.css';
import '../../css/c/cgx7qpb0o.css';
import '../../css/m/m1bazrfir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r1fqibbtg"/><path class="i1vplkssi"/><path class="cgx7qpb0o"/><path class="m1bazrfir"/></g>`,
		"fallback": "circle-flags:interslavic",
	});
}

export default Component;
