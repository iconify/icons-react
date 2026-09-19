import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/hsu--o9xt.css';
import '../../css/t/tck_mdb3w.css';
import '../../css/y/ymkc6jb5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="hsu--o9xt"/><path class="tck_mdb3w"/><path class="ymkc6jb5y"/></g>`,
		"fallback": "circle-flags:us-mn",
	});
}

export default Component;
