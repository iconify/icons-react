import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxi5mew3h.css';
import '../../css/l/ljoz4662n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qxi5mew3h"/><circle class="ljoz4662n"/>`,
		"fallback": "garden:relationshape-message-26",
	});
}

export default Component;
