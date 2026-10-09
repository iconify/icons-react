import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viu8vyokx.css';
import '../../css/j/jyz_jvb2h.css';
import '../../css/i/ihicaccwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viu8vyokx"/><path class="jyz_jvb2h"/><path class="ihicaccwh"/>`,
		"fallback": "energy-icons:leaf-check-48",
	});
}

export default Component;
