import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0a7yn5d.css';
import '../../css/s/su784c8yq.css';
import '../../css/x/xot3z3mcu.css';
import '../../css/l/lahk8gn4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm0a7yn5d"/><path class="su784c8yq"/><path class="xot3z3mcu"/><path class="lahk8gn4o"/>`,
		"fallback": "bitcoin-icons:nfc-filled",
	});
}

export default Component;
