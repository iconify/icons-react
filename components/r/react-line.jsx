import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4va0_8o.css';
import '../../css/p/pveq17viu.css';
import '../../css/v/vdh9--c9v.css';
import '../../css/a/afj5qubuj.css';
import '../../css/z/zidxzfb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4va0_8o"/><path class="pveq17viu"/><path class="vdh9--c9v"/><path class="afj5qubuj"/><path class="zidxzfb5r"/>`,
		"fallback": "mingcute:react-line",
	});
}

export default Component;
