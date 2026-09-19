import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfn1or_0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfn1or_0y"/>`,
		"fallback": "boxicons:proper-subset-filled",
	});
}

export default Component;
