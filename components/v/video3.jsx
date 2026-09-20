import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nmv1skbvq.css';
import '../../css/l/lvw2-sbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nmv1skbvq"/><path class="lvw2-sbpw"/></g>`,
		"fallback": "reicon:video3",
	});
}

export default Component;
