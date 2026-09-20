import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/c/c_dyc3b7o.css';
import '../../css/h/hj3zw0b9o.css';
import '../../css/u/u_j8embez.css';
import '../../css/q/q32raonkb.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="c_dyc3b7o"/><path class="hj3zw0b9o"/><path class="u_j8embez"/><path class="q32raonkb"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:malaysia",
	});
}

export default Component;
