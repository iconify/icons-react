import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/r/rmban7b_u.css';
import '../../css/z/zho782gha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="rmban7b_u"/><path class="zho782gha"/>`,
		"fallback": "energy-icons:report-48",
	});
}

export default Component;
