import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qczs5sb6a.css';
import '../../css/h/hps0sxa7g.css';
import '../../css/z/z_b_ocbhl.css';
import '../../css/u/uppje8bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qczs5sb6a"/><path class="hps0sxa7g"/><path class="z_b_ocbhl"/><path class="uppje8bed"/>`,
		"fallback": "withicons-bauhaus:laptop",
	});
}

export default Component;
