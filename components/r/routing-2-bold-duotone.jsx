import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe32f93df.css';
import '../../css/z/zaq8jgbqr.css';
import '../../css/o/ouhyjzb-t.css';
import '../../css/q/qrmgfrbnf.css';
import '../../css/e/ejdkbfbdj.css';
import '../../css/p/picmuzzmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="qe32f93df"><path class="zaq8jgbqr"/><path class="ouhyjzb-t"/></g><path class="qrmgfrbnf"/><path class="ejdkbfbdj"/><path class="picmuzzmu"/>`,
		"fallback": "solar:routing-2-bold-duotone",
	});
}

export default Component;
