import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwibdw4bb.css';
import '../../css/a/akf245-tr.css';
import '../../css/n/nzv-jwb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwibdw4bb"/><path class="akf245-tr"/><path class="nzv-jwb3f"/>`,
		"fallback": "boxicons:rewind-circle",
	});
}

export default Component;
