import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5nansb4m.css';
import '../../css/g/ghanqywqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5nansb4m"/><rect class="ghanqywqh"/>`,
		"fallback": "bitcoin-icons:smartcard-filled",
	});
}

export default Component;
