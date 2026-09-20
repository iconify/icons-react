import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-htnbcov.css';
import '../../css/h/h79w7ebun.css';
import '../../css/y/y15y19baw.css';
import '../../css/x/x3lo5jswq.css';
import '../../css/a/a07kqu_br.css';
import '../../css/v/vf7123vwl.css';

const viewBox = {"width":256,"height":332};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGL9oVpcfY" x1="55.117%" x2="63.68%" y1="58.68%" y2="39.597%"><stop offset="0%" class="h-htnbcov"/><stop offset="53%" class="h79w7ebun"/><stop offset="100%" class="y15y19baw"/></linearGradient></defs><path fill="url(#SVGL9oVpcfY)" class="x3lo5jswq"/><path class="a07kqu_br"/><path class="vf7123vwl"/>`,
		"fallback": "thesvg-color:sublime-text",
	});
}

export default Component;
