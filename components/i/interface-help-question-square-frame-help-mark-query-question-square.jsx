import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bse-cb6-t.css';
import '../../css/v/v4jwiishd.css';
import '../../css/z/zcx5a3i1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="bse-cb6-t"/><path class="v4jwiishd"/><path class="zcx5a3i1q"/>`,
		"fallback": "streamline:interface-help-question-square-frame-help-mark-query-question-square",
	});
}

export default Component;
