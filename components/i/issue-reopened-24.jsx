import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a804f_bji.css';
import '../../css/v/v5yyqhbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a804f_bji"/><path class="v5yyqhbqc"/>`,
		"fallback": "octicon:issue-reopened-24",
	});
}

export default Component;
