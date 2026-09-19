import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfn3o34-i.css';
import '../../css/e/ecf1c0bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfn3o34-i"/><path class="ecf1c0bzp"/>`,
		"fallback": "eos-icons:repositories",
	});
}

export default Component;
