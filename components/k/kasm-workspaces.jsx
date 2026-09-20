import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azrh3xblv.css';
import '../../css/y/y6a5k_bnq.css';
import '../../css/y/y52yl1_4n.css';
import '../../css/f/fmd5ecb5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azrh3xblv"/><path class="y6a5k_bnq"/><path class="y52yl1_4n"/><path class="fmd5ecb5v"/>`,
		"fallback": "selfhst:kasm-workspaces",
	});
}

export default Component;
