import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpud8lb0h.css';
import '../../css/p/p8s23_l4e.css';
import '../../css/f/f66-habgz.css';
import '../../css/m/mpdz9zp2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpud8lb0h"/><path class="p8s23_l4e"/><path clip-rule="evenodd" class="f66-habgz"/><path class="mpdz9zp2q"/>`,
		"fallback": "bitcoin-icons:shared-wallet-filled",
	});
}

export default Component;
