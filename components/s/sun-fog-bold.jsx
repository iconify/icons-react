import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3_8fkw7e.css';
import '../../css/l/llrk-tbrn.css';
import '../../css/n/n6sk80bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o3_8fkw7e"/><path class="llrk-tbrn"/><path clip-rule="evenodd" class="n6sk80bgi"/>`,
		"fallback": "solar:sun-fog-bold",
	});
}

export default Component;
