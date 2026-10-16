import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqfw9ounj.css';
import '../../css/u/uvq5nbclt.css';
import '../../css/j/jiuj5vb5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqfw9ounj"/><path class="uvq5nbclt"/><path class="jiuj5vb5b"/>`,
		"fallback": "energy-icons:light-switch-20",
	});
}

export default Component;
