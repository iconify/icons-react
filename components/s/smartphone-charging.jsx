import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xt--6yqaw.css';
import '../../css/y/yq--07jli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xt--6yqaw"/><path class="yq--07jli"/></g>`,
		"fallback": "vadivam:smartphone-charging",
	});
}

export default Component;
