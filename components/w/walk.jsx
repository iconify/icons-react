import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3qvylb2e.css';
import '../../css/e/e1u7ewaaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s3qvylb2e"/><path class="e1u7ewaaz"/>`,
		"fallback": "bx:walk",
	});
}

export default Component;
