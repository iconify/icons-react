import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3lbonbua.css';
import '../../css/b/bq5th6b_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g3lbonbua"/><path class="bq5th6b_l"/>`,
		"fallback": "carbon:timing-belt",
	});
}

export default Component;
