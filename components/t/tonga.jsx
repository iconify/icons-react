import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zifxdrbtd.css';
import '../../css/t/tbr-k1iil.css';
import '../../css/l/lz56vjbyd.css';
import '../../css/p/pzi5q3boi.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zifxdrbtd"/><path class="tbr-k1iil"/><path class="lz56vjbyd"/><path class="pzi5q3boi"/>`,
		"fallback": "tabler-flags:tonga",
	});
}

export default Component;
