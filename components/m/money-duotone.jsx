import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6k6c5bss.css';
import '../../css/n/n1xy6nh9u.css';
import '../../css/l/litg_1bdj.css';
import '../../css/n/n20flac_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6k6c5bss"/><circle class="n1xy6nh9u"/><rect class="litg_1bdj"/><rect class="n20flac_t"/>`,
		"fallback": "lets-icons:money-duotone",
	});
}

export default Component;
