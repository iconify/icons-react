import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/n/ndsoh9bgy.css';
import '../../css/k/k1usvwtey.css';
import '../../css/k/k7y_74pjq.css';
import '../../css/h/hdcj5fbao.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="ndsoh9bgy"/><path class="k1usvwtey"/><path class="k7y_74pjq"/><path class="hdcj5fbao"/>`,
		"fallback": "tabler-flags:iraq",
	});
}

export default Component;
