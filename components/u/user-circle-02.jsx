import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2gkg98dp.css';
import '../../css/e/e120ssikb.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m2gkg98dp"/><path class="e120ssikb"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "hugeicons:user-circle-02",
	});
}

export default Component;
