import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9v53-bgm.css';
import '../../css/z/zai5frbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g9v53-bgm"/><path class="zai5frbay"/></g>`,
		"fallback": "vadivam:search-code",
	});
}

export default Component;
