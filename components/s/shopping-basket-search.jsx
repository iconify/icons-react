import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hab8xcmbp.css';
import '../../css/g/gd74an6ih.css';
import '../../css/n/n5owbduok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hab8xcmbp"/><path class="gd74an6ih"/><path class="n5owbduok"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-search",
	});
}

export default Component;
