import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a78ikzb1o.css';
import '../../css/z/zr6-qibes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a78ikzb1o"/><path class="zr6-qibes"/>`,
		"fallback": "eos-icons:packages-outlined",
	});
}

export default Component;
