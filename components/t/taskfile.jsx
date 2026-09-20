import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziao2px2e.css';
import '../../css/h/hyv-2gbfp.css';
import '../../css/k/k9mgxccva.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziao2px2e"/><path class="hyv-2gbfp"/><path class="k9mgxccva"/>`,
		"fallback": "material-icon-theme:taskfile",
	});
}

export default Component;
