import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc25svfcp.css';
import '../../css/j/jly7v7-2j.css';
import '../../css/f/f_km3v9ni.css';
import '../../css/a/afby5gqzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc25svfcp"/><path class="jly7v7-2j"/><path class="f_km3v9ni"/><path class="afby5gqzh"/>`,
		"fallback": "selfhst:maybe",
	});
}

export default Component;
