import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/os8safvnw.css';
import '../../css/t/tbx9ltbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="os8safvnw"/><path class="tbx9ltbbh"/></g>`,
		"fallback": "vadivam:split",
	});
}

export default Component;
