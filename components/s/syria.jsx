import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1x_6zbkv.css';
import '../../css/g/gk5dn-bts.css';
import '../../css/n/ndsoh9bgy.css';
import '../../css/t/tomk5q72m.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1x_6zbkv"/><path class="gk5dn-bts"/><path class="ndsoh9bgy"/><path class="tomk5q72m"/>`,
		"fallback": "tabler-flags:syria",
	});
}

export default Component;
