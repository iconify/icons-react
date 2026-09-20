import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c4x8o2l8q.css';
import '../../css/c/csof25-mz.css';
import '../../css/z/z1acx-bhx.css';
import '../../css/h/h5qes9n5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="c4x8o2l8q"/><path class="csof25-mz"/><path class="z1acx-bhx"/><path class="h5qes9n5g"/></g>`,
		"fallback": "streamline-logos:logo",
	});
}

export default Component;
