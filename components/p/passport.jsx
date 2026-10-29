import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dojiukb8c.css';
import '../../css/u/u1_hubbvw.css';
import '../../css/w/wk2zli15y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dojiukb8c wm-k"/><path class="u1_hubbvw wm-a"/><path class="wk2zli15y wm-a"/>`,
		"fallback": "withicons-bauhaus:passport",
	});
}

export default Component;
