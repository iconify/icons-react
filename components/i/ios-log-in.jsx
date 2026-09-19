import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb_nlublp.css';
import '../../css/b/bpfa_z1vq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb_nlublp"/><path class="bpfa_z1vq"/>`,
		"fallback": "ion:ios-log-in",
	});
}

export default Component;
