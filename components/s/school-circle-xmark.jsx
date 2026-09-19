import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etuget6lq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etuget6lq"/>`,
		"fallback": "fa7-solid:school-circle-xmark",
	});
}

export default Component;
