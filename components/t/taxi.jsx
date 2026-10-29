import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mypcxdb2j.css';
import '../../css/g/g3ln1eoob.css';
import '../../css/g/gmaorj__k.css';
import '../../css/s/saup0_b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mypcxdb2j wm-a"/><path class="g3ln1eoob wm-k"/><path class="gmaorj__k wm-k"/><path class="saup0_b6w wm-k"/>`,
		"fallback": "withicons-bauhaus:taxi",
	});
}

export default Component;
