import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/n08v84w_a.css';
import '../../css/s/s_t3s3bao.css';
import '../../css/w/wqz7ieczt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="n08v84w_a"/><path class="s_t3s3bao"/><path class="wqz7ieczt"/></g>`,
		"fallback": "circle-flags:lang-bg",
	});
}

export default Component;
