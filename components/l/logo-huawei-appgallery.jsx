import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5vn515oq.css';
import '../../css/i/iohxa7xbn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5vn515oq"/><path clip-rule="evenodd" class="iohxa7xbn"/></g>`,
		"fallback": "gravity-ui:logo-huawei-appgallery",
	});
}

export default Component;
