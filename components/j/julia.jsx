import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3s9lacyv.css';
import '../../css/n/n4qa2bbyo.css';
import '../../css/b/bh5tjhb6h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l3s9lacyv"/><circle class="n4qa2bbyo"/><circle class="bh5tjhb6h"/>`,
		"fallback": "devicon-plain:julia",
	});
}

export default Component;
