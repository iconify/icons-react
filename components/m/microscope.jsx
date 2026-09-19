import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0mmccrx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bh0mmccrx"/>`,
		"fallback": "gravity-ui:microscope",
	});
}

export default Component;
