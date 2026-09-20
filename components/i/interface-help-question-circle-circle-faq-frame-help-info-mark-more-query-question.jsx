import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0tuhogfj.css';
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
		"content": `<circle class="i0tuhogfj"/><path class="v4jwiishd"/><path class="zcx5a3i1q"/>`,
		"fallback": "streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question",
	});
}

export default Component;
