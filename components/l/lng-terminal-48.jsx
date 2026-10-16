import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt0ueeb_n.css';
import '../../css/s/soqe29bkt.css';
import '../../css/x/x5dwb7bic.css';
import '../../css/l/lukygbb6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt0ueeb_n"/><path class="soqe29bkt"/><path class="x5dwb7bic"/><path class="lukygbb6t"/>`,
		"fallback": "energy-icons:lng-terminal-48",
	});
}

export default Component;
