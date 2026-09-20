import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o19vw7hlu.css';
import '../../css/a/a2s72obzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o19vw7hlu"/><path clip-rule="evenodd" class="a2s72obzp"/>`,
		"fallback": "oui:undeploy",
	});
}

export default Component;
