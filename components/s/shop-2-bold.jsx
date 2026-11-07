import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu28wccgh.css';
import '../../css/z/zfnhitbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wu28wccgh"/><path class="zfnhitbjm"/>`,
		"fallback": "solar:shop-2-bold",
	});
}

export default Component;
