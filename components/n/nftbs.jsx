import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v64c_yb9i.css';
import '../../css/v/v_vtyxmcb.css';
import '../../css/f/fz2_nmwzp.css';
import '../../css/i/ivqkh1ttq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v64c_yb9i"/><path class="v_vtyxmcb"/><path class="fz2_nmwzp"/><path class="ivqkh1ttq"/>`,
		"fallback": "token:nftbs",
	});
}

export default Component;
