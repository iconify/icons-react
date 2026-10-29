import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhp4b7gcv.css';
import '../../css/n/nos6nfben.css';
import '../../css/o/o4qtwp2ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhp4b7gcv"/><path class="nos6nfben"/><path class="o4qtwp2ep"/>`,
		"fallback": "withicons-bauhaus:table",
	});
}

export default Component;
