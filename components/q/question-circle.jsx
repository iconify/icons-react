import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mabwzbbvc.css';
import '../../css/a/aris89b7q.css';
import '../../css/z/zwst-wbqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mabwzbbvc"/><circle class="aris89b7q"/><path class="zwst-wbqw"/>`,
		"fallback": "nimbus:question-circle",
	});
}

export default Component;
