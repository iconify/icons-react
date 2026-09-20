import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c8ae3b8hz.css';
import '../../css/n/n-s3_4imp.css';
import '../../css/n/n3murebba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c8ae3b8hz"/><circle class="n-s3_4imp"/><path class="n3murebba"/></g>`,
		"fallback": "lucide:search-x",
	});
}

export default Component;
