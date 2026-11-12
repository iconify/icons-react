import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yov418k2z.css';
import '../../css/w/wv43mybxd.css';
import '../../css/b/b-u4hkhef.css';
import '../../css/n/nvangkgwa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yov418k2z"/><path class="wv43mybxd"/><path class="b-u4hkhef"/><path class="nvangkgwa"/>`,
		"fallback": "selfhst:schoolmessenger",
	});
}

export default Component;
