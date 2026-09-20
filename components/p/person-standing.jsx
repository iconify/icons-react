import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ja7twxd8s.css';
import '../../css/k/k74o-88ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ja7twxd8s"/><path class="k74o-88ql"/></g>`,
		"fallback": "lucide:person-standing",
	});
}

export default Component;
