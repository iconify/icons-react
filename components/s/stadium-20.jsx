import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhq8k4w1w.css';
import '../../css/o/ojgsrdbfo.css';
import '../../css/m/mibj8nzcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhq8k4w1w"/><path class="ojgsrdbfo"/><path class="mibj8nzcw"/>`,
		"fallback": "energy-icons:stadium-20",
	});
}

export default Component;
