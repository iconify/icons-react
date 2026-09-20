import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqch13d3y.css';
import '../../css/h/hke-fq0-t.css';
import '../../css/a/ahp5hdczi.css';

const viewBox = {"width":256,"height":299};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGqJZyIdTu" x1="31.047%" x2="68.957%" y1="11.705%" y2="88.303%"><stop offset="0%" class="hqch13d3y"/><stop offset="100%" class="hke-fq0-t"/></linearGradient></defs><path fill="url(#SVGqJZyIdTu)" class="ahp5hdczi"/>`,
		"fallback": "thesvg-color:surrealdb",
	});
}

export default Component;
