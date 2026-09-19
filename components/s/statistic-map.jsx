import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb37wj2kt.css';
import '../../css/k/k8xftibiq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb37wj2kt"/><path class="k8xftibiq"/>`,
		"fallback": "gis:statistic-map",
	});
}

export default Component;
