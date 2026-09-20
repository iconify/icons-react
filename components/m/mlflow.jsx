import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc_dl32mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc_dl32mw"/>`,
		"fallback": "thesvg-color:mlflow",
	});
}

export default Component;
