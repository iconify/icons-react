import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaw53egrr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaw53egrr"/>`,
		"fallback": "fluent-mdl2:public-folder",
	});
}

export default Component;
