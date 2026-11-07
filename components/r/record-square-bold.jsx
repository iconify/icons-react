import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_csnkffw.css';
import '../../css/k/kvt6enbri.css';
import '../../css/q/qwhmxvbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_csnkffw"/><path class="kvt6enbri"/><path clip-rule="evenodd" class="qwhmxvbxf"/>`,
		"fallback": "solar:record-square-bold",
	});
}

export default Component;
