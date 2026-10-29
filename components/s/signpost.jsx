import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynpsrlbdk.css';
import '../../css/u/umcjjfb3i.css';
import '../../css/e/evrpsqb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynpsrlbdk"/><path class="umcjjfb3i"/><path class="evrpsqb4e"/>`,
		"fallback": "withicons-bauhaus:signpost",
	});
}

export default Component;
