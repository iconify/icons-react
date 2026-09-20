import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqiqh7wda.css';
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
		"content": `<g class="nrj6p8qat"><path class="uqiqh7wda"/><circle class="n-s3_4imp"/><path class="n3murebba"/></g>`,
		"fallback": "lucide:search-slash",
	});
}

export default Component;
