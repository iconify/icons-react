import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr6lwtbkj.css';
import '../../css/y/ymdjnobca.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr6lwtbkj"/><path class="ymdjnobca"/>`,
		"fallback": "medical-icon:no-smoking",
	});
}

export default Component;
