import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnhb0dblg.css';
import '../../css/n/nd5uqlx5w.css';
import '../../css/o/os8fygsdg.css';
import '../../css/s/s16aoqb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnhb0dblg"/><path class="nd5uqlx5w"/><path class="os8fygsdg"/><path class="s16aoqb6n"/>`,
		"fallback": "selfhst:transfer-zip-dark",
	});
}

export default Component;
