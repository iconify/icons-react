import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc7tgwran.css';
import '../../css/r/rv7f2sbom.css';
import '../../css/z/zk1j0x1lv.css';
import '../../css/m/m99nb8bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc7tgwran"/><path class="rv7f2sbom"/><path class="zk1j0x1lv"/><path class="m99nb8bny"/>`,
		"fallback": "gcp:memorystore",
	});
}

export default Component;
