import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/goerp7bib.css';
import '../../css/j/j5nhi9bbx.css';
import '../../css/h/hfnzlwbvs.css';
import '../../css/y/yq7deobye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="goerp7bib"/><path class="j5nhi9bbx"/><path class="hfnzlwbvs"/><path class="yq7deobye"/></g>`,
		"fallback": "streamline-ultimate:weather-cloud-snow-thunder",
	});
}

export default Component;
