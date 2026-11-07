import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctk3lmxrt.css';
import '../../css/i/ihwrm7b8t.css';
import '../../css/m/mlbyvsbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctk3lmxrt"/><path class="ihwrm7b8t"/><path class="mlbyvsbes"/>`,
		"fallback": "solar:lightbulb-bolt-bold-duotone",
	});
}

export default Component;
