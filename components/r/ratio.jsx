import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oucxx_e8q.css';
import '../../css/p/pnoz8abqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oucxx_e8q"/><path class="pnoz8abqi"/></g>`,
		"fallback": "vadivam:ratio",
	});
}

export default Component;
