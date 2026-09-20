import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3he2rb6n.css';
import '../../css/s/snp287xku.css';
import '../../css/y/yeeetfbff.css';
import '../../css/w/wqhty6b0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3he2rb6n"/><path class="snp287xku"/><path class="yeeetfbff"/><path class="wqhty6b0o"/>`,
		"fallback": "streamline-emojis:spade-suit",
	});
}

export default Component;
