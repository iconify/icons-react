import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zvv9-ib3u.css';
import '../../css/a/akwnwfb5u.css';
import '../../css/x/x9o47uzpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="zvv9-ib3u"/><path class="akwnwfb5u"/><path class="x9o47uzpy"/></g>`,
		"fallback": "circle-flags:lang-lt",
	});
}

export default Component;
