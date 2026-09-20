import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfs_du59r.css';
import '../../css/e/e7yzphbkc.css';
import '../../css/x/xcdrlybuo.css';
import '../../css/l/lw14398ol.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfs_du59r"/><path class="e7yzphbkc"/><path class="xcdrlybuo"/><path class="lw14398ol"/>`,
		"fallback": "streamline-pixel:transportation-bicycle",
	});
}

export default Component;
