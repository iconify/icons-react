import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhpoww2ff.css';
import '../../css/a/a3v1qp52j.css';
import '../../css/t/tf-eykfuu.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhpoww2ff"/><path class="a3v1qp52j"/><path class="tf-eykfuu"/>`,
		"fallback": "iwwa:user-functions",
	});
}

export default Component;
