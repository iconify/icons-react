import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha9b68b0m.css';
import '../../css/f/fjxvhi0bo.css';
import '../../css/f/ftf34c06p.css';
import '../../css/l/l2ptp5l2h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha9b68b0m"/><path clip-rule="evenodd" class="fjxvhi0bo"/><path class="ftf34c06p"/><path clip-rule="evenodd" class="l2ptp5l2h"/>`,
		"fallback": "teenyicons:nintendo-switch-solid",
	});
}

export default Component;
