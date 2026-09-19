import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zvv9-ib3u.css';
import '../../css/a/akwnwfb5u.css';
import '../../css/x/x9o47uzpy.css';
import '../../css/a/ae9racynq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zvv9-ib3u"/><path class="akwnwfb5u"/><path class="x9o47uzpy"/><path class="ae9racynq"/></g>`,
		"fallback": "circle-flags:mm",
	});
}

export default Component;
