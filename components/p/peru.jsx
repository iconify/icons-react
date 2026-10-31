import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1fo9snfu.css';
import '../../css/l/l9cl-boot.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1fo9snfu"/><path class="l9cl-boot"/>`,
		"fallback": "tabler-flags:peru",
	});
}

export default Component;
