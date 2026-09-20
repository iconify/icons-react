import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q254hsbwh.css';
import '../../css/q/qjavm0bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q254hsbwh"/><path class="qjavm0bgn"/>`,
		"fallback": "pixel:medical-house",
	});
}

export default Component;
