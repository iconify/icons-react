import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbe-4xb3t.css';
import '../../css/v/vmcd0q5ih.css';
import '../../css/a/a2y4u47so.css';
import '../../css/c/c1rzylbld.css';
import '../../css/c/cdeyr9bha.css';
import '../../css/y/yyh-b76jh.css';
import '../../css/g/g64gsmf7u.css';
import '../../css/y/y7ttp5zyd.css';
import '../../css/x/xf6is_h4p.css';
import '../../css/f/fo71-vxbj.css';
import '../../css/w/wn077hbzs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbe-4xb3t"/><path class="vmcd0q5ih"/><path class="a2y4u47so"/><path class="c1rzylbld"/><path class="cdeyr9bha"/><path class="yyh-b76jh"/><path class="g64gsmf7u"/><path class="y7ttp5zyd"/><path class="xf6is_h4p"/><circle class="fo71-vxbj"/><circle class="wn077hbzs"/>`,
		"fallback": "openmoji:submarine-under-water",
	});
}

export default Component;
